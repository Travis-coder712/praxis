import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/praxis/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Praxis — Practical AI',
        short_name: 'Praxis',
        description: 'Practical AI learning by doing',
        theme_color: '#0b0d12',
        background_color: '#0b0d12',
        display: 'standalone',
        scope: '/praxis/',
        start_url: '/praxis/',
        icons: [],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
  build: { outDir: 'dist', sourcemap: false },
})
