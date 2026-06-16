import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cgarrido.github.io',
  integrations: [tailwind()],
  output: 'static',
});
