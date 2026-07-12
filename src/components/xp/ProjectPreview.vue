<script setup lang="ts">
import type { ProjectSummary } from "./desktopTypes";

defineProps<{ project: ProjectSummary }>();
const emit = defineEmits<{ openFullPage: [] }>();
</script>

<template>
  <article class="preview">
    <img
      v-if="project.coverImage"
      class="preview__cover"
      :src="project.coverImage"
      :alt="`${project.title} project preview`"
    />
    <p class="preview__status">{{ project.status.replace("-", " ") }}</p>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    <ul v-if="project.technologies.length" class="preview__tags" aria-label="Technologies">
      <li v-for="technology in project.technologies" :key="technology">
        {{ technology }}
      </li>
    </ul>

    <section v-if="project.features.length" class="preview__feature">
      <h4>Featured capability</h4>
      <strong>{{ project.features[0]?.title }}</strong>
      <p>{{ project.features[0]?.description }}</p>
    </section>

    <div class="preview__actions">
      <a
        class="preview__primary"
        :href="`/projects/${project.id}`"
        @click.prevent="emit('openFullPage')"
      >
        Open complete project page
      </a>
      <a v-if="project.repositoryUrl" :href="project.repositoryUrl">Repository</a>
      <a v-if="project.liveUrl" :href="project.liveUrl">Live site</a>
    </div>
  </article>
</template>

<style scoped>
.preview { max-width: 48rem; margin: 0 auto; }
.preview__cover { display: block; width: 100%; max-height: 13rem; border: 1px solid #7f9db9; object-fit: cover; }
.preview__status { margin: 0 0 0.2rem; color: #17458f; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; }
.preview h3 { margin: 0; color: #0a246a; font-size: 1.5rem; }
.preview__tags { display: flex; padding: 0; list-style: none; flex-wrap: wrap; gap: 0.35rem; }
.preview__tags li { padding: 0.2rem 0.45rem; border: 1px solid #7f9db9; background: white; font-size: 0.72rem; }
.preview__feature { padding: 0.65rem; border: 1px solid #aca899; background: #fff; }
.preview__feature h4,
.preview__feature p { margin: 0 0 0.3rem; }
.preview__actions { display: flex; margin-top: 1rem; flex-wrap: wrap; align-items: center; gap: 0.8rem; }
.preview__actions a { color: #003399; font-weight: 700; }
.preview__actions .preview__primary { padding: 0.5rem 0.7rem; border: 1px solid #17458f; background: #316ac5; color: white; text-decoration: none; }
.preview__actions a:focus-visible { outline: 3px solid var(--focus-color); outline-offset: 2px; }
</style>
