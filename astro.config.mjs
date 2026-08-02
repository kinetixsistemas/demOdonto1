// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    // Elimina la petición CSS que bloquea el renderizado (LCP/Lighthouse):
    // el CSS es pequeño (~8.7KiB) y la página es única, así que se embebe en el HTML.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
