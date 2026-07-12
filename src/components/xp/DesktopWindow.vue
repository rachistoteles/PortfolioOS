<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useId,
  watch,
} from "vue";

interface Props {
  windowId: string;
  title: string;
  initialX?: number;
  initialY?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialX: 0,
  initialY: 0,
});

const windowElement = ref<HTMLElement | null>(null);
const titleBarElement = ref<HTMLElement | null>(null);
const position = ref({ x: props.initialX, y: props.initialY });
const isMinimized = ref(false);
const isMaximized = ref(false);
const isOpen = ref(true);
const componentId = useId();
const titleId = `desktop-window-title-${componentId}`;
const instructionsId = `desktop-window-instructions-${componentId}`;

let activePointerId: number | null = null;
let dragOrigin = { pointerX: 0, pointerY: 0, windowX: 0, windowY: 0 };

const windowStyle = computed(() => ({
  transform: isMaximized.value
    ? undefined
    : `translate3d(${position.value.x}px, ${position.value.y}px, 0)`,
}));

function clampPosition(x: number, y: number) {
  const element = windowElement.value;
  const bounds = element?.parentElement?.getBoundingClientRect();

  if (!element || !bounds) {
    return { x, y };
  }

  const rect = element.getBoundingClientRect();
  const baseLeft = rect.left - position.value.x;
  const baseTop = rect.top - position.value.y;
  const minX = bounds.left - baseLeft;
  const maxX = bounds.right - baseLeft - Math.min(rect.width, 160);
  const minY = bounds.top - baseTop;
  const maxY = bounds.bottom - baseTop - 32;

  return {
    x: Math.min(Math.max(x, minX), Math.max(minX, maxX)),
    y: Math.min(Math.max(y, minY), Math.max(minY, maxY)),
  };
}

function announceState() {
  window.dispatchEvent(
    new CustomEvent("portfolio:window-state", {
      detail: {
        id: props.windowId,
        title: props.title,
        minimized: isMinimized.value,
        maximized: isMaximized.value,
        open: isOpen.value,
      },
    }),
  );
}

function announceActive() {
  window.dispatchEvent(
    new CustomEvent("portfolio:window-active", {
      detail: { id: props.windowId },
    }),
  );
}

function startDragging(event: PointerEvent) {
  if (
    isMaximized.value ||
    event.button !== 0 ||
    (event.target as HTMLElement).closest("button")
  ) {
    return;
  }

  announceActive();
  activePointerId = event.pointerId;
  dragOrigin = {
    pointerX: event.clientX,
    pointerY: event.clientY,
    windowX: position.value.x,
    windowY: position.value.y,
  };
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
}

function drag(event: PointerEvent) {
  if (activePointerId !== event.pointerId) {
    return;
  }

  position.value = clampPosition(
    dragOrigin.windowX + event.clientX - dragOrigin.pointerX,
    dragOrigin.windowY + event.clientY - dragOrigin.pointerY,
  );
}

function stopDragging(event: PointerEvent) {
  if (activePointerId !== event.pointerId) {
    return;
  }

  activePointerId = null;
  const target = event.currentTarget as HTMLElement;

  if (target.hasPointerCapture(event.pointerId)) {
    target.releasePointerCapture(event.pointerId);
  }
}

function moveWithKeyboard(event: KeyboardEvent) {
  if (isMaximized.value || !event.altKey) {
    return;
  }

  const distance = event.shiftKey ? 48 : 16;
  const movement = {
    ArrowLeft: { x: -distance, y: 0 },
    ArrowRight: { x: distance, y: 0 },
    ArrowUp: { x: 0, y: -distance },
    ArrowDown: { x: 0, y: distance },
  }[event.key];

  if (movement) {
    event.preventDefault();
    position.value = clampPosition(
      position.value.x + movement.x,
      position.value.y + movement.y,
    );
  }
}

function toggleMaximized() {
  isMaximized.value = !isMaximized.value;
  isMinimized.value = false;
}

async function restoreAndFocus() {
  isOpen.value = true;
  isMinimized.value = false;
  await nextTick();
  titleBarElement.value?.focus();
  announceActive();
}

function handleWindowCommand(event: Event) {
  const detail = (event as CustomEvent<{ id: string; action: string }>).detail;

  if (detail.id !== props.windowId) {
    return;
  }

  if (detail.action === "restore") {
    void restoreAndFocus();
  } else if (detail.action === "minimize") {
    isMinimized.value = true;
  } else if (detail.action === "toggle") {
    if (isMinimized.value) {
      void restoreAndFocus();
    } else {
      isMinimized.value = true;
    }
  }
}

function handleResize() {
  if (!isMaximized.value) {
    position.value = clampPosition(position.value.x, position.value.y);
  }
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("portfolio:window-command", handleWindowCommand);
  announceState();
});

watch([isMinimized, isMaximized, isOpen], announceState);

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("portfolio:window-command", handleWindowCommand);
});
</script>

<template>
  <section
    v-if="isOpen"
    v-show="!isMinimized"
    ref="windowElement"
    class="desktop-window"
    :class="{ 'desktop-window--maximized': isMaximized }"
    :style="windowStyle"
    role="region"
    :aria-labelledby="titleId"
    :aria-describedby="instructionsId"
    @focusin="announceActive"
    @pointerdown="announceActive"
  >
    <header
      ref="titleBarElement"
      class="desktop-window__titlebar"
      tabindex="0"
      @pointerdown="startDragging"
      @pointermove="drag"
      @pointerup="stopDragging"
      @pointercancel="stopDragging"
      @keydown="moveWithKeyboard"
      @dblclick="toggleMaximized"
    >
      <span class="desktop-window__title-icon" aria-hidden="true">📁</span>
      <h2 :id="titleId">{{ title }}</h2>

      <div class="desktop-window__controls" aria-label="Window controls">
        <button
          type="button"
          :aria-label="`Minimize ${title}`"
          title="Minimize"
          @click="isMinimized = true"
        ><span aria-hidden="true">_</span></button>
        <button
          type="button"
          :aria-label="isMaximized ? `Restore ${title}` : `Maximize ${title}`"
          :title="isMaximized ? 'Restore' : 'Maximize'"
          @click="toggleMaximized"
        ><span aria-hidden="true">□</span></button>
        <button
          type="button"
          class="desktop-window__close"
          :aria-label="`Close ${title}`"
          title="Close"
          @click="isOpen = false"
        ><span aria-hidden="true">×</span></button>
      </div>
    </header>

    <div v-if="$slots.menu" class="desktop-window__menubar">
      <slot name="menu" />
    </div>
    <div v-if="$slots.toolbar" class="desktop-window__toolbar">
      <slot name="toolbar" />
    </div>
    <div v-if="$slots.address" class="desktop-window__addressbar">
      <span>Address</span>
      <div class="desktop-window__address">
        <span aria-hidden="true">📁</span>
        <slot name="address" />
      </div>
    </div>

    <div class="desktop-window__content"><slot /></div>

    <p :id="instructionsId" class="visually-hidden">
      Focus the title bar and press Alt plus an arrow key to move this window.
      Hold Shift to move farther. Minimized windows can be restored from the taskbar.
    </p>
  </section>
</template>

<style scoped>
.desktop-window {
  position: relative;
  z-index: 2;
  width: min(100%, 44rem);
  margin-top: 1.25rem;
  overflow: hidden;
  border: 2px solid #0a58d9;
  border-radius: 8px 8px 3px 3px;
  background: #ece9d8;
  box-shadow: 4px 7px 22px rgb(0 0 0 / 42%);
  color: #111;
}

.desktop-window--maximized { width: 100%; max-width: none; }

.desktop-window__titlebar {
  display: flex;
  min-height: 1.9rem;
  padding: 0.2rem 0.25rem 0.2rem 0.4rem;
  border-bottom: 1px solid #0a246a;
  background: linear-gradient(180deg, #3f8cf3 0%, #0a58d9 45%, #1657d6 58%, #0a58d9 100%);
  color: white;
  align-items: center;
  gap: 0.35rem;
  touch-action: none;
  user-select: none;
  cursor: move;
  font-family: "Trebuchet MS", Tahoma, sans-serif;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 45%);
}

.desktop-window--maximized .desktop-window__titlebar { cursor: default; }
.desktop-window__title-icon { font-size: 0.9rem; text-shadow: none; }

.desktop-window__titlebar h2 {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  flex: 1;
  font-size: 0.82rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desktop-window__controls { display: flex; flex-shrink: 0; gap: 0.12rem; }

.desktop-window__controls button {
  display: grid;
  width: 1.35rem;
  height: 1.25rem;
  padding: 0;
  border: 1px solid rgb(255 255 255 / 65%);
  border-radius: 3px;
  background: linear-gradient(180deg, #6aa8f7, #1652c9);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 65%);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  line-height: 1;
  cursor: pointer;
  place-items: center;
}

.desktop-window__controls .desktop-window__close {
  background: linear-gradient(180deg, #f37b73, #d83b1f 58%, #b62312);
}

.desktop-window__controls button:hover { filter: brightness(1.12); }

.desktop-window__titlebar:focus-visible,
.desktop-window__controls button:focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: 2px;
}

.desktop-window__menubar,
.desktop-window__toolbar,
.desktop-window__addressbar {
  border-bottom: 1px solid #aca899;
  background: #ece9d8;
}

.desktop-window__menubar { display: flex; padding: 0.2rem 0.45rem; gap: 0.75rem; font-size: 0.76rem; }
.desktop-window__menubar :deep(a) { padding: 0.12rem 0.25rem; text-decoration: none; }
.desktop-window__menubar :deep(a:hover),
.desktop-window__menubar :deep(a:focus-visible) { background: #316ac5; color: white; }

.desktop-window__toolbar {
  display: flex;
  min-height: 2.55rem;
  padding: 0.3rem 0.45rem;
  background: linear-gradient(180deg, #fff, #f6f2ea 45%, #ece9d8);
  align-items: center;
  gap: 0.3rem;
}

.desktop-window__toolbar :deep(a) {
  display: inline-flex;
  padding: 0.35rem 0.5rem;
  border: 1px solid transparent;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.76rem;
  text-decoration: none;
}

.desktop-window__toolbar :deep(a:hover),
.desktop-window__toolbar :deep(a:focus-visible) {
  border-color: #7f9db9;
  background: linear-gradient(180deg, #fff, #dbeafe);
}

.desktop-window__addressbar { display: flex; padding: 0.28rem 0.45rem; align-items: center; gap: 0.4rem; font-size: 0.74rem; }
.desktop-window__address {
  display: flex;
  min-width: 0;
  min-height: 1.4rem;
  padding: 0.1rem 0.35rem;
  overflow: hidden;
  border: 1px solid #7f9db9;
  background: white;
  flex: 1;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
}

.desktop-window__content { padding: 1.15rem; line-height: 1.6; }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

@media (prefers-reduced-motion: no-preference) {
  .desktop-window { transition: width 120ms ease; }
}
</style>
