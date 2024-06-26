import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://hironsiuk.github.io/Login-Page/",
  resolve: {
    alias: {
      src: "/src",
    }
  }
})
