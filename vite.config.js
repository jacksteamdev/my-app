import { defineConfig } from 'vite';
import {
  chromeExtension,
  simpleReloader
} from 'rollup-plugin-chrome-extension';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// });

export default defineConfig({
  root: '.',
  build: {
    sourcemap: 'inline',
    outDir: 'dist'
  },
  plugins: [react(), chromeExtension(), simpleReloader()]
});
