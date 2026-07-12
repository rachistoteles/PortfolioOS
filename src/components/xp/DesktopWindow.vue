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

import type { WindowPosition } from "./desktopTypes";

interface Props {
  windowId: string;
  title: string;
  icon?: string;
  position: WindowPosition;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
  active: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  icon: "📁",
});
const emit = defineEmits<{
  close: [];
  focus: [];
  minimize: [];
  move: [position: WindowPosition];
  resize: [size: { width: number; height: number }];
  toggleMaximize: [];
}>();

const windowElement = ref<HTMLElement | null>(null);
const titleBarElement = ref<HTMLElement | null>(null);
const componentId = useId();
const titleId = `desktop-window-title-${componentId}`;
const instructionsId = `desktop-window-instructions-${componentId}`;
let activePointerId: number | null = null;
let dragOrigin = { pointerX: 0, pointerY: 0, windowX: 0, windowY: 0 };
let resizePointerId: number | null = null;
let resizeOrigin = { pointerX: 0, pointerY: 0, width: 0, height: 0 };

const windowStyle = computed(() => ({
  left: props.maximized ? undefined : `${props.position.x}px`,
  top: props.maximized ? undefined : `${props.position.y}px`,
  width: props.maximized ? undefined : `${props.width}px`,
  height: props.maximized ? undefined : `${props.height}px`,
  zIndex: props.zIndex,
}));

function clampPosition(x: number, y: number) {
  const element = windowElement.value;
  const bounds = element?.parentElement?.getBoundingClientRect();

  if (!element || !bounds) {
    return { x, y };
  }

  const minimumVisibleWidth = Math.min(element.offsetWidth, 160);
  const minimumVisibleHeight = 32;

  return {
    x: Math.min(
      Math.max(x, -element.offsetWidth + minimumVisibleWidth),
      Math.max(0, bounds.width - minimumVisibleWidth),
    ),
    y: Math.min(
      Math.max(y, 0),
      Math.max(0, bounds.height - minimumVisibleHeight),
    ),
  };
}

function startDragging(event: PointerEvent) {
  if (
    props.maximized ||
    event.button !== 0 ||
    (event.target as HTMLElement).closest("button")
  ) {
    return;
  }

  emit("focus");
  activePointerId = event.pointerId;
  dragOrigin = {
    pointerX: event.clientX,
    pointerY: event.clientY,
    windowX: props.position.x,
    windowY: props.position.y,
  };
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
}

function drag(event: PointerEvent) {
  if (activePointerId !== event.pointerId) {
    return;
  }

  emit(
    "move",
    clampPosition(
      dragOrigin.windowX + event.clientX - dragOrigin.pointerX,
      dragOrigin.windowY + event.clientY - dragOrigin.pointerY,
    ),
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

function clampSize(width: number, height: number) {
  const bounds = windowElement.value?.parentElement?.getBoundingClientRect();

  if (!bounds) {
    return { width, height };
  }

  return {
    width: Math.min(
      Math.max(width, 320),
      Math.max(320, bounds.width - Math.max(props.position.x, 0)),
    ),
    height: Math.min(
      Math.max(height, 220),
      Math.max(220, bounds.height - Math.max(props.position.y, 0)),
    ),
  };
}

function startResizing(event: PointerEvent) {
  if (props.maximized || event.button !== 0) {
    return;
  }

  event.stopPropagation();
  emit("focus");
  resizePointerId = event.pointerId;
  resizeOrigin = {
    pointerX: event.clientX,
    pointerY: event.clientY,
    width: props.width,
    height: props.height,
  };
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
}

function resize(event: PointerEvent) {
  if (resizePointerId !== event.pointerId) {
    return;
  }

  emit(
    "resize",
    clampSize(
      resizeOrigin.width + event.clientX - resizeOrigin.pointerX,
      resizeOrigin.height + event.clientY - resizeOrigin.pointerY,
    ),
  );
}

function stopResizing(event: PointerEvent) {
  if (resizePointerId !== event.pointerId) {
    return;
  }

  resizePointerId = null;
  const target = event.currentTarget as HTMLElement;

  if (target.hasPointerCapture(event.pointerId)) {
    target.releasePointerCapture(event.pointerId);
  }
}

function resizeWithKeyboard(event: KeyboardEvent) {
  const distance = event.shiftKey ? 48 : 16;
  const change = {
    ArrowLeft: { width: -distance, height: 0 },
    ArrowRight: { width: distance, height: 0 },
    ArrowUp: { width: 0, height: -distance },
    ArrowDown: { width: 0, height: distance },
  }[event.key];

  if (change) {
    event.preventDefault();
    emit(
      "resize",
      clampSize(props.width + change.width, props.height + change.height),
    );
  }
}

function moveWithKeyboard(event: KeyboardEvent) {
  if (props.maximized || !event.altKey) {
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
    emit(
      "move",
      clampPosition(
        props.position.x + movement.x,
        props.position.y + movement.y,
      ),
    );
  }
}

function clampCurrentGeometry() {
  if (!props.maximized) {
    emit("move", clampPosition(props.position.x, props.position.y));
    emit("resize", clampSize(props.width, props.height));
  }
}

onMounted(async () => {
  window.addEventListener("resize", clampCurrentGeometry);
  clampCurrentGeometry();
  await nextTick();
  titleBarElement.value?.focus();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", clampCurrentGeometry);
});

watch(
  () => props.minimized,
  async (isMinimized, wasMinimized) => {
    if (wasMinimized && !isMinimized) {
      await nextTick();
      titleBarElement.value?.focus();
    }
  },
);

watch(
  () => props.title,
  async () => {
    await nextTick();
    titleBarElement.value?.focus();
  },
);
</script>

<template>
  <section
    v-show="!minimized"
    ref="windowElement"
    class="desktop-window"
    :class="{
      'desktop-window--active': active,
      'desktop-window--maximized': maximized,
    }"
    :style="windowStyle"
    role="dialog"
    :aria-labelledby="titleId"
    :aria-describedby="instructionsId"
    @focusin="emit('focus')"
    @pointerdown="emit('focus')"
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
      @dblclick="emit('toggleMaximize')"
    >
      <span class="desktop-window__title-icon" aria-hidden="true">{{ icon }}</span>
      <h2 :id="titleId">{{ title }}</h2>

      <div class="desktop-window__controls" aria-label="Window controls">
        <button
          type="button"
          :aria-label="`Minimize ${title}`"
          title="Minimize"
          @click="emit('minimize')"
        ><span aria-hidden="true">_</span></button>
        <button
          type="button"
          :aria-label="maximized ? `Restore ${title}` : `Maximize ${title}`"
          :title="maximized ? 'Restore' : 'Maximize'"
          @click="emit('toggleMaximize')"
        ><span aria-hidden="true">{{ maximized ? "❐" : "□" }}</span></button>
        <button
          type="button"
          class="desktop-window__close"
          :aria-label="`Close ${title}`"
          title="Close"
          @click="emit('close')"
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
        <span aria-hidden="true">{{ icon }}</span>
        <slot name="address" />
      </div>
    </div>

    <div class="desktop-window__content"><slot /></div>

    <button
      v-if="!maximized"
      type="button"
      class="desktop-window__resize"
      :aria-label="`Resize ${title}. Use arrow keys; hold Shift for larger steps.`"
      title="Resize window"
      @pointerdown="startResizing"
      @pointermove="resize"
      @pointerup="stopResizing"
      @pointercancel="stopResizing"
      @keydown="resizeWithKeyboard"
    ></button>

    <p :id="instructionsId" class="visually-hidden">
      This is a non-modal desktop window. Focus the title bar and press Alt plus
      an arrow key to move it. Hold Shift to move farther. Use the taskbar to
      restore a minimized window.
    </p>
  </section>
</template>

<style scoped>
.desktop-window {
  position: absolute;
  pointer-events: auto;
  display: flex;
  min-width: 20rem;
  min-height: 12rem;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  border: 2px solid #17458f;
  border-radius: 8px 8px 3px 3px;
  background: #ece9d8;
  box-shadow: 4px 7px 22px rgb(0 0 0 / 42%);
  color: #111;
  flex-direction: column;
}

.desktop-window--active { border-color: #0a58d9; }
.desktop-window--maximized {
  inset: 0;
  width: auto;
  height: auto;
  border-radius: 0;
}

.desktop-window__titlebar {
  display: flex;
  min-height: 1.9rem;
  padding: 0.2rem 0.25rem 0.2rem 0.4rem;
  border-bottom: 1px solid #0a246a;
  background: linear-gradient(180deg, #7b8ca8, #526b93 48%, #415a83);
  color: white;
  align-items: center;
  gap: 0.35rem;
  touch-action: none;
  user-select: none;
  cursor: move;
  font-family: "Trebuchet MS", Tahoma, sans-serif;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 45%);
}

.desktop-window--active .desktop-window__titlebar {
  background: linear-gradient(180deg, #3f8cf3 0%, #0a58d9 45%, #1657d6 58%, #0a58d9 100%);
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
  outline-offset: -3px;
}

.desktop-window__menubar,
.desktop-window__toolbar,
.desktop-window__addressbar {
  flex: 0 0 auto;
  border-bottom: 1px solid #aca899;
  background: #ece9d8;
}

.desktop-window__menubar { display: flex; padding: 0.2rem 0.45rem; gap: 0.75rem; font-size: 0.76rem; }
.desktop-window__menubar :deep(button),
.desktop-window__menubar :deep(a) {
  padding: 0.12rem 0.25rem;
  border: 0;
  background: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
.desktop-window__menubar :deep(button:hover),
.desktop-window__menubar :deep(button:focus-visible),
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

.desktop-window__toolbar :deep(button),
.desktop-window__toolbar :deep(a) {
  display: inline-flex;
  padding: 0.35rem 0.5rem;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.76rem;
  text-decoration: none;
  cursor: pointer;
}
.desktop-window__toolbar :deep(button:hover),
.desktop-window__toolbar :deep(button:focus-visible),
.desktop-window__toolbar :deep(a:hover),
.desktop-window__toolbar :deep(a:focus-visible) {
  border-color: #7f9db9;
  background: linear-gradient(180deg, #fff, #dbeafe);
}
.desktop-window__toolbar :deep(button:disabled) {
  opacity: 0.45;
  cursor: default;
  filter: grayscale(1);
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

.desktop-window__content {
  min-height: 0;
  padding: 1rem;
  overflow: auto;
  flex: 1;
  line-height: 1.55;
}
.desktop-window__resize {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1rem;
  height: 1rem;
  padding: 0;
  border: 0;
  background:
    linear-gradient(135deg, transparent 45%, #7f9db9 46% 55%, transparent 56%),
    linear-gradient(135deg, transparent 65%, #7f9db9 66% 75%, transparent 76%);
  cursor: nwse-resize;
}
.desktop-window__resize:focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: -3px;
}
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

@media (prefers-reduced-motion: no-preference) {
  .desktop-window {
    transition:
      left 160ms ease,
      top 160ms ease,
      width 160ms ease,
      height 160ms ease;
  }
}

@media (max-width: 720px) {
  .desktop-window {
    inset: 0 !important;
    width: auto !important;
    height: auto !important;
    min-width: 0;
    min-height: 0;
    border-radius: 0;
  }

  .desktop-window__titlebar { cursor: default; }
  .desktop-window__resize { display: none; }
}
</style>
