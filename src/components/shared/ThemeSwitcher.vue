<script setup lang="ts">
import { onMounted, ref } from "vue";

type PortfolioTheme = "xp" | "modern";

const activeTheme = ref<PortfolioTheme>("xp");

function applyTheme(theme: PortfolioTheme): void {
  activeTheme.value = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
}

function toggleTheme(): void {
  applyTheme(activeTheme.value === "xp" ? "modern" : "xp");
}

onMounted(() => {
  const savedTheme = localStorage.getItem(
    "portfolio-theme",
  ) as PortfolioTheme | null;

  applyTheme(savedTheme === "modern" ? "modern" : "xp");
});
</script>

<template>
  <button
    class="theme-switcher"
    type="button"
    :aria-label="
      activeTheme === 'xp'
        ? 'Activate modern version'
        : 'Activate nostalgic version'
    "
    @click="toggleTheme"
  >
    {{
      activeTheme === "xp"
        ? "Modern Version"
        : "Return to PortfolioOS"
    }}
  </button>
</template>

<style scoped>
.theme-switcher {
  min-height: 2.5rem;
  padding: 0.55rem 1rem;
  border: 2px solid currentColor;
  border-radius: 0.4rem;
  background: var(--theme-switch-background);
  color: var(--theme-switch-foreground);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.theme-switcher:hover {
  transform: translateY(-1px);
}

.theme-switcher:focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: 3px;
}
</style>
