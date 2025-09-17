// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listens on all network interfaces
    port: 5173,      // Ensure the port is explicitly set
  },
  base: '/Delivery-box-web2/',
  
  
})