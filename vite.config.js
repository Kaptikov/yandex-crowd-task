// vite.config.js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import posthtml from '@vituum/vite-plugin-posthtml'

import path from 'path'

export default defineConfig(() => {
  return {
    server: {
      watch: {
        include: 'src/**/*.html',
      },
    },
    base: '/yandex-crowd-task/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/assets'),
      },
    },
    plugins: [
      posthtml(),

      ViteImageOptimizer({
        jpg: {
          quality: 100,
        },
        jpeg: {
          quality: 100,
        },
        png: {
          quality: 100,
        },
        webp: {
          lossless: true,
        },
      }),
    ],
  }
})
