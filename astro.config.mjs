
 // @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  base: '/PortfolioOS',
  integrations: [vue()],
});
