import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://e28e-58-228-2-217.ngrok-free.app/",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
