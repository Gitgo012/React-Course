import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',           // Allows external access
    // allowedHosts: [
    //   '19a8-2401-4900-5b8c-24c9-153e-684c-de17-927f.ngrok-free.app',  // Add ngrok hostname here
    //   'localhost',  // Optional: You can add localhost as well
    // ],
  },
  plugins: [react()],
})
