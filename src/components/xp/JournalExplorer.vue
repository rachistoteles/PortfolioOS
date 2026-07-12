<script setup lang="ts">
import type { ArticleSummary } from "./desktopTypes";

defineProps<{ articles: ArticleSummary[] }>();
const emit = defineEmits<{ openArticle: [article: ArticleSummary] }>();

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(new Date(value));
}
</script>

<template>
  <div class="explorer">
    <p class="explorer__summary">
      Select an article to open its preview in a separate desktop window.
    </p>
    <ul v-if="articles.length" class="explorer__list">
      <li v-for="article in articles" :key="article.id">
        <button type="button" @click="emit('openArticle', article)">
          <span class="explorer__icon" aria-hidden="true">📄</span>
          <span class="explorer__details">
            <strong>{{ article.title }}</strong>
            <span>{{ article.description }}</span>
          </span>
          <span class="explorer__meta">
            {{ article.category }} · {{ formatDate(article.publishedAt) }}
          </span>
        </button>
      </li>
    </ul>
    <p v-else>No published journal entries are available yet.</p>
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
  grid-template-columns: 2.5rem minmax(0, 1fr);
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
.explorer__meta { grid-column: 2; color: #17458f; font-size: 0.7rem; }
</style>
