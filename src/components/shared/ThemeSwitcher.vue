<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import {
  PORTFOLIO_THEMES,
  type PortfolioThemeId,
} from "../../config/portfolioThemes";
import {
  applyPortfolioTheme,
  readStoredPortfolioTheme,
} from "../../utils/portfolioTheme";

const isOpen = ref(false);
const activeTheme = ref<PortfolioThemeId>("xp");
const rootElement = ref<HTMLElement | null>(null);

const activeDefinition = computed(
  () =>
    PORTFOLIO_THEMES.find((theme) => theme.id === activeTheme.value) ??
    PORTFOLIO_THEMES[1],
);

function selectTheme(themeId: PortfolioThemeId) {
  applyPortfolioTheme(themeId);
  activeTheme.value = themeId;
  isOpen.value = false;
}

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function handleDocumentPointer(event: PointerEvent) {
  if (!isOpen.value || !rootElement.value) {
    return;
  }

  if (!rootElement.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && isOpen.value) {
    isOpen.value = false;
  }
}

onMounted(() => {
  activeTheme.value = readStoredPortfolioTheme();
  applyPortfolioTheme(activeTheme.value);
  document.addEventListener("pointerdown", handleDocumentPointer);
  document.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", handleDocumentPointer);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div ref="rootElement" class="theme-era-switcher">
    <button
      type="button"
      class="theme-era-switcher__trigger"
      :aria-expanded="isOpen"
      aria-controls="portfolio-theme-menu"
      aria-haspopup="dialog"
      @click="toggleMenu"
    >
      <span class="theme-era-switcher__swatch" aria-hidden="true">
        <i
          :style="{
            background: activeDefinition.preview.background,
          }"
        ></i>
        <i
          :style="{
            background: activeDefinition.preview.accent,
          }"
        ></i>
      </span>
      <span class="theme-era-switcher__label">
        <strong>{{ activeDefinition.name }}</strong>
        <small>{{ activeDefinition.era }}</small>
      </span>
      <span class="theme-era-switcher__chevron" aria-hidden="true">▾</span>
    </button>

    <div
      v-show="isOpen"
      id="portfolio-theme-menu"
      class="theme-era-switcher__menu"
      role="dialog"
      aria-label="Choose portfolio presentation era"
    >
      <p class="theme-era-switcher__menu-title">Presentation era</p>
      <ul>
        <li v-for="theme in PORTFOLIO_THEMES" :key="theme.id">
          <button
            type="button"
            class="theme-era-switcher__option"
            :aria-pressed="activeTheme === theme.id"
            @click="selectTheme(theme.id)"
          >
            <span
              class="theme-era-switcher__preview"
              aria-hidden="true"
              :style="{
                background: `linear-gradient(135deg, ${theme.preview.background}, ${theme.preview.panel})`,
                borderColor: theme.preview.accent,
                color: theme.preview.text,
              }"
            >
              <span
                class="theme-era-switcher__preview-accent"
                :style="{ background: theme.preview.accent }"
              ></span>
            </span>
            <span class="theme-era-switcher__copy">
              <strong>{{ theme.name }}</strong>
              <small>{{ theme.era }}</small>
              <span>{{ theme.description }}</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.theme-era-switcher {
  position: relative;
}

.theme-era-switcher__trigger {
  display: flex;
  min-height: 2.5rem;
  max-width: min(100vw - 2rem, 16rem);
  padding: 0.35rem 0.55rem;
  border: 2px solid currentColor;
  border-radius: 0.4rem;
  background: var(--theme-switch-background, #fff);
  color: var(--theme-switch-foreground, #10245a);
  align-items: center;
  gap: 0.45rem;
  font: inherit;
  cursor: pointer;
}

.theme-era-switcher__swatch {
  display: grid;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex: 0 0 auto;
  border: 1px solid currentColor;
  border-radius: 0.25rem;
  grid-template-columns: 1fr 1fr;
}

.theme-era-switcher__swatch i {
  display: block;
}

.theme-era-switcher__label {
  min-width: 0;
  flex: 1;
  text-align: left;
}

.theme-era-switcher__label strong,
.theme-era-switcher__label small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.theme-era-switcher__label strong {
  font-size: 0.78rem;
}

.theme-era-switcher__label small {
  margin-top: 0.1rem;
  opacity: 0.75;
  font-size: 0.62rem;
}

.theme-era-switcher__chevron {
  flex: 0 0 auto;
  font-size: 0.7rem;
}

.theme-era-switcher__menu {
  position: absolute;
  z-index: 1200;
  top: calc(100% + 0.35rem);
  right: 0;
  width: min(22rem, calc(100vw - 1rem));
  max-height: min(70vh, 28rem);
  overflow: auto;
  border: 1px solid #334155;
  border-radius: 0.55rem;
  background: #0f172a;
  box-shadow: 0 12px 30px rgb(0 0 0 / 35%);
  color: #e2e8f0;
}

.theme-era-switcher__menu-title {
  margin: 0;
  padding: 0.7rem 0.8rem 0.35rem;
  color: #94a3b8;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.theme-era-switcher__menu ul {
  margin: 0;
  padding: 0.35rem;
  list-style: none;
}

.theme-era-switcher__option {
  display: grid;
  width: 100%;
  padding: 0.55rem;
  border: 1px solid transparent;
  border-radius: 0.45rem;
  background: transparent;
  color: inherit;
  grid-template-columns: 2.6rem 1fr;
  gap: 0.65rem;
  text-align: left;
  cursor: pointer;
}

.theme-era-switcher__option:hover,
.theme-era-switcher__option:focus-visible {
  border-color: #64748b;
  background: rgb(148 163 184 / 12%);
  outline: 0;
}

.theme-era-switcher__option[aria-pressed="true"] {
  border-color: #82f7d5;
  background: rgb(130 247 213 / 10%);
}

.theme-era-switcher__preview {
  position: relative;
  width: 2.6rem;
  height: 2.6rem;
  overflow: hidden;
  border: 2px solid;
  border-radius: 0.35rem;
}

.theme-era-switcher__preview-accent {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 0.45rem;
}

.theme-era-switcher__copy {
  min-width: 0;
}

.theme-era-switcher__copy strong,
.theme-era-switcher__copy small,
.theme-era-switcher__copy span {
  display: block;
}

.theme-era-switcher__copy strong {
  font-size: 0.82rem;
}

.theme-era-switcher__copy small {
  margin: 0.1rem 0 0.25rem;
  color: #94a3b8;
  font-size: 0.65rem;
}

.theme-era-switcher__copy span {
  color: #cbd5e1;
  font-size: 0.68rem;
  line-height: 1.35;
}

.theme-era-switcher__trigger:focus-visible {
  outline: 3px solid var(--focus-color, #ffb000);
  outline-offset: 3px;
}

@media (max-width: 720px) {
  .theme-era-switcher__menu {
    right: auto;
    left: 0;
    width: min(20rem, calc(100vw - 1.5rem));
  }
}
</style>
