import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      common: resolve(__dirname, 'src/common'),
      pages: resolve(__dirname, 'src/pages'),
      services: resolve(__dirname, 'src/services'),
      assets: resolve(__dirname, 'src/assets'),
      config: resolve(__dirname, 'src/config'),
      constants: resolve(__dirname, 'src/constants'),
      stores: resolve(__dirname, 'src/stores'),
      lib: resolve(__dirname, 'src/lib'),
      types: resolve(__dirname, 'src/types'),
      utils: resolve(__dirname, 'src/utils'),
    },
  },
});
