import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel works best with the root base path
  base: '/', 
  build: {
    // This ensures your build output is clean for Vercel deployment
    outDir: 'dist',
  }
})