import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: './src/css/tailwind.css',
      output: {
        dir: 'assets',
        assetFileNames: 'app.css',
      },
    },
  },
});
