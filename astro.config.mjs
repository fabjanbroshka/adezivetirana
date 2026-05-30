import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fabjanbroshka.github.io',
  base: '/adezivetirana',
  integrations: [tailwind()],
});
