import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// Set this to your GitHub repo name for correct asset paths on GitHub Pages
const REPO_NAME = 'WorkshopSite';

export default defineConfig({
  site: `https://JDIXON-2.github.io`,
  base: `/${REPO_NAME}`,
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
