import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": "http://localhost:3216",
      "/api": "http://localhost:3216"
      // "/auth": "https://smoots-fake-aim-chat-app.onrender.com",
      // "/api": "https://smoots-fake-aim-chat-app.onrender.com"
    }
  }
})
