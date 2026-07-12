<script setup lang="ts">
import type { ProjectSummary } from "./desktopTypes";

defineProps<{ projects: ProjectSummary[] }>();
const emit = defineEmits<{ openProject: [project: ProjectSummary] }>();

function formatStatus(status: ProjectSummary["status"]) {
  return status.replace("-", " ");
}
</script>

<template>
  <div class="explorer">
    <p class="explorer__summary">
      Select a project to open its preview in a separate desktop window.
    </p>
    <ul class="explorer__list">
      <li v-for="project in projects" :key="project.id">
        <button type="button" @click="emit('openProject', project)">
          <span class="explorer__icon" aria-hidden="true">🖥️</span>
          <span class="explorer__details">
            <strong>{{ project.title }}</strong>
            <span>{{ project.description }}</span>
          </span>
          <span class="explorer__meta">{{ formatStatus(project.status) }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.explorer__summary { margin-top: 0; color: #444; font-size: 0.8rem; }
.explorer__list { display: grid; margin: 0; padding: 0; list-style: none; gap: 0.3rem; }
.explorer__list button {
  display: grid;
  width: 100%;
  padding: 0.55rem;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  grid-template-columns: 2.5rem minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.65rem;
  text-align: left;
  cursor: pointer;
}
.explorer__list button:hover,
.explorer__list button:focus-visible {
  border-color: #7f9db9;
  background: #dbeafe;
  outline: 2px solid transparent;
}
.explorer__icon { font-size: 1.7rem; }
.explorer__details { display: grid; min-width: 0; gap: 0.15rem; }
.explorer__details span { overflow: hidden; color: #555; font-size: 0.76rem; text-overflow: ellipsis; white-space: nowrap; }
.explorer__meta { color: #17458f; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; }

@media (max-width: 34rem) {
  .explorer__list button { grid-template-columns: 2rem minmax(0, 1fr); }
  .explorer__meta { grid-column: 2; }
}
</style>
