import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Enable LAN access
    port: 5173,  // Optional: specify port
  },
  plugins: [react(), tailwindcss(), "babel-plugin-glsl"],
})
