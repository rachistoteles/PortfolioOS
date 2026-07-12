<script setup lang="ts">
defineProps<{
  src: string;
  title: string;
}>();
</script>

<template>
  <iframe class="internal-page" :src="src" :title="title"></iframe>
</template>

<style scoped>
.internal-page {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 28rem;
  border: 1px solid #7f9db9;
  background: white;
}
</style>
