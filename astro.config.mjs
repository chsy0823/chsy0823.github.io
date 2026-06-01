import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://chsy0823.github.io',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
});
