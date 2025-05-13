import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/api': {
        target: 'https://snakesystem-web-api-tdam.shuttle.app/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/great': {
        target: 'https://snakesystem-web-api-tdam.shuttle.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/great/, '')
      }
    }
  }
})
