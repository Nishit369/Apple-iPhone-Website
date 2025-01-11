import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "none-oay",
    project: "javascript-react"
  })],

  server: {
    port: 5174, // Specify your desired port here
  },

  build: {
    sourcemap: true
  }
})