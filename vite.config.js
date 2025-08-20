import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // For development, always use root path
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/',
      server: {
        port: 3000,
        open: true
      }
    }
  }
  
  // For production builds, check if we're building for GitHub Pages
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  
  return {
    plugins: [react()],
    base: isGitHubPages ? "/ModernShop/" : "/",
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  }
})
