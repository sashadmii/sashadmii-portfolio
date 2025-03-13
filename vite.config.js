import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/sashadmii-portfolio',
  build: {
    outDir: './public/build',
  },
  plugins: [react()],
});
