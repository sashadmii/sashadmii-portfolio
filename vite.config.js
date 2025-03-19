import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [tailwindcss(), react()],
  base: '/sashadmii-portfolio/',
});
