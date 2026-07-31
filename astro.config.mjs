// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Fuerza a Vite a resolver siempre una sola instancia de React en todo el árbol de módulos
      dedupe: ['react', 'react-dom', 'framer-motion'],
    },
    ssr: {
      // Asegura que estas librerías pasen por el empaquetador de Vite para SSR
      noExternal: ['framer-motion', 'lucide-react'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    },
  },
});