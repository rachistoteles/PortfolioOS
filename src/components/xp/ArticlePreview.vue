<script setup lang="ts">
import type { ArticleSummary } from "./desktopTypes";

defineProps<{ article: ArticleSummary }>();
const emit = defineEmits<{ openFullPage: [] }>();

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date(value));
}
</script>

<template>
  <article class="preview">
    <img
      v-if="article.coverImage"
      class="preview__cover"
      :src="article.coverImage"
      :alt="`${article.title} article preview`"
    />
    <p class="preview__meta">
      {{ article.category }} · {{ formatDate(article.publishedAt) }}
    </p>
    <h3>{{ article.title }}</h3>
    <p>{{ article.description }}</p>

    <ul v-if="article.tags.length" class="preview__tags" aria-label="Article tags">
      <li v-for="tag in article.tags" :key="tag">{{ tag }}</li>
    </ul>

    <a
      class="preview__primary"
      :href="`/blog/${article.id}`"
      @click.prevent="emit('openFullPage')"
    >
      Read the complete journal entry
    </a>
  </article>
</template>

<style scoped>
.preview { max-width: 44rem; margin: 0 auto; }
.preview__cover { display: block; width: 100%; max-height: 13rem; border: 1px solid #7f9db9; object-fit: cover; }
.preview__meta { margin: 0 0 0.2rem; color: #17458f; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; }
.preview h3 { margin: 0; color: #0a246a; font-size: 1.5rem; }
.preview__tags { display: flex; padding: 0; list-style: none; flex-wrap: wrap; gap: 0.35rem; }
.preview__tags li { padding: 0.2rem 0.45rem; border: 1px solid #7f9db9; background: white; font-size: 0.72rem; }
.preview__primary { display: inline-block; margin-top: 1rem; padding: 0.5rem 0.7rem; border: 1px solid #17458f; background: #316ac5; color: white; font-weight: 700; text-decoration: none; }
.preview__primary:focus-visible { outline: 3px solid var(--focus-color); outline-offset: 2px; }
</style>
