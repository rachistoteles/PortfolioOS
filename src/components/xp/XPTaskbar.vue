<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

interface Props {
  windowId: string;
  windowTitle: string;
}

const props = defineProps<Props>();
const isOpen = ref(true);
const isMinimized = ref(false);
const isActive = ref(true);
const isStartOpen = ref(false);
const clock = ref("");
let clockTimer: number | undefined;

function updateClock() {
  clock.value = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

function handleWindowState(event: Event) {
  const detail = (
    event as CustomEvent<{ id: string; open: boolean; minimized: boolean }>
  ).detail;

  if (detail.id === props.windowId) {
    isOpen.value = detail.open;
    isMinimized.value = detail.minimized;
    isActive.value = detail.open && !detail.minimized;
  }
}

function handleWindowActive(event: Event) {
  const detail = (event as CustomEvent<{ id: string }>).detail;
  isActive.value = detail.id === props.windowId;
}

function toggleWindow() {
  window.dispatchEvent(
    new CustomEvent("portfolio:window-command", {
      detail: { id: props.windowId, action: "toggle" },
    }),
  );
}

function closeStartMenu(event: KeyboardEvent) {
  if (event.key === "Escape") {
    isStartOpen.value = false;
  }
}

onMounted(() => {
  updateClock();
  clockTimer = window.setInterval(updateClock, 30_000);
  window.addEventListener("portfolio:window-state", handleWindowState);
  window.addEventListener("portfolio:window-active", handleWindowActive);
});

onBeforeUnmount(() => {
  window.clearInterval(clockTimer);
  window.removeEventListener("portfolio:window-state", handleWindowState);
  window.removeEventListener("portfolio:window-active", handleWindowActive);
});
</script>

<template>
  <footer
    class="xp-taskbar"
    aria-label="Desktop taskbar"
    @keydown="closeStartMenu"
  >
    <nav v-if="isStartOpen" id="portfolio-start-menu" class="start-menu" aria-label="Start menu">
      <header>
        <span class="start-avatar" aria-hidden="true">RV</span>
        <strong>Richard Vázquez</strong>
      </header>
      <div class="start-menu__links">
        <a href="/projects"><span aria-hidden="true">🖥️</span><span><strong>My Projects</strong><small>Applications and experiments</small></span></a>
        <a href="/blog"><span aria-hidden="true">📁</span><span><strong>Technical Journal</strong><small>Development logs and guides</small></span></a>
        <a href="#about"><span aria-hidden="true">📄</span><span><strong>About Richard</strong><small>Profile and technical focus</small></span></a>
      </div>
    </nav>

    <button
      type="button"
      class="start-button"
      aria-controls="portfolio-start-menu"
      :aria-expanded="isStartOpen"
      @click="isStartOpen = !isStartOpen"
    >
      <span class="start-orbit" aria-hidden="true">◈</span>
      Start
    </button>

    <div class="taskbar-divider" aria-hidden="true"></div>

    <button
      v-if="isOpen"
      type="button"
      class="taskbar-app"
      :class="{ 'taskbar-app--active': isActive && !isMinimized }"
      :aria-pressed="isActive && !isMinimized"
      :aria-label="isMinimized ? `Restore ${windowTitle}` : `Minimize ${windowTitle}`"
      @click="toggleWindow"
    >
      <span aria-hidden="true">📁</span>
      <span>{{ windowTitle }}</span>
    </button>

    <div class="taskbar-tray">
      <span class="tray-status" aria-label="PortfolioOS is online">●</span>
      <time>{{ clock }}</time>
    </div>
  </footer>
</template>

<style scoped>
.xp-taskbar {
  position: fixed;
  z-index: 50;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  height: 2.45rem;
  border-top: 1px solid #1d68d5;
  background: linear-gradient(180deg, #3888ee 0%, #1761cf 18%, #0d55c7 63%, #16449b);
  color: white;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 -1px 4px rgb(0 0 0 / 24%);
}

.start-button {
  height: 100%;
  padding: 0 1.2rem 0 0.85rem;
  border: 0;
  border-right: 1px solid #1b6b20;
  border-radius: 0 1rem 1rem 0;
  background: linear-gradient(180deg, #78d866, #3ba43a 42%, #237824);
  box-shadow: inset 0 1px 1px rgb(255 255 255 / 55%);
  color: white;
  font-family: "Trebuchet MS", Tahoma, sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 800;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 45%);
  cursor: pointer;
}

.start-orbit { margin-right: 0.3rem; color: #fff8bd; }
.taskbar-divider { width: 2px; height: 1.75rem; border-right: 1px solid rgb(255 255 255 / 35%); background: rgb(0 38 133 / 35%); }

.start-menu {
  position: fixed;
  z-index: 60;
  bottom: 2.45rem;
  left: 0;
  width: min(25rem, calc(100vw - 1rem));
  overflow: hidden;
  border: 2px solid #0a58d9;
  border-bottom: 0;
  border-radius: 7px 7px 0 0;
  background: #fff;
  color: #111;
  box-shadow: 4px -4px 18px rgb(0 0 0 / 35%);
}

.start-menu header {
  display: flex;
  padding: 0.65rem 0.8rem;
  background: linear-gradient(180deg, #3f8cf3, #0a58d9);
  color: white;
  align-items: center;
  gap: 0.65rem;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
}

.start-avatar {
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid white;
  border-radius: 5px;
  background: linear-gradient(135deg, #fff8bd, #69b157);
  color: #17448c;
  font-weight: 800;
  text-shadow: none;
  place-items: center;
}

.start-menu__links { display: grid; padding: 0.45rem; }
.start-menu__links a {
  display: grid;
  padding: 0.55rem;
  color: #111;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  gap: 0.45rem;
  text-decoration: none;
}
.start-menu__links a:hover,
.start-menu__links a:focus-visible { background: #316ac5; color: white; outline: 0; }
.start-menu__links span:first-child { font-size: 1.45rem; }
.start-menu__links strong,
.start-menu__links small { display: block; }
.start-menu__links small { margin-top: 0.12rem; opacity: 0.75; }

.taskbar-app {
  display: flex;
  width: min(14rem, 38vw);
  height: 1.9rem;
  padding: 0 0.65rem;
  overflow: hidden;
  border: 1px solid rgb(0 45 145 / 60%);
  border-radius: 0.15rem;
  background: linear-gradient(180deg, #4c97ee, #2571d4);
  box-shadow: inset 1px 1px 0 rgb(255 255 255 / 24%);
  color: white;
  align-items: center;
  gap: 0.4rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.taskbar-app--active { background: linear-gradient(180deg, #1450a7, #1f62bd); box-shadow: inset 1px 2px 3px rgb(0 0 0 / 28%); }
.start-button:focus-visible,
.taskbar-app:focus-visible { outline: 3px solid var(--focus-color); outline-offset: -3px; }

.taskbar-tray {
  display: flex;
  height: 100%;
  margin-left: auto;
  padding: 0 0.8rem;
  border-left: 1px solid #0b75c5;
  background: linear-gradient(180deg, #25a7ed, #0b87d8);
  align-items: center;
  gap: 0.55rem;
  font-size: 0.78rem;
  box-shadow: inset 1px 0 0 rgb(255 255 255 / 28%);
}

.tray-status { color: #b9ff93; text-shadow: 0 0 3px #276b12; }
</style>
