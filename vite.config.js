/* eslint-disable import-x/no-extraneous-dependencies */

import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import vueDevToolsAccessibility from 'vue-dev-tools-accessibility';

const config = defineConfig({
  plugins: [
    vue(),
    vueDevTools({
      launchEditor: 'subl'
    }),
    vueDevToolsAccessibility()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});

export default config;
