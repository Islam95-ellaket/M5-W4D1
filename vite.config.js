import react from '@vitejs/plugin-react'
import { defineConfig, DevEnvironment } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js'
  },
  server: {
    open:true
  }
})
