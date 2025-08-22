import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Development: always use root base
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/',
      build: {
        outDir: 'dist',
        sourcemap: true
      },
      server: {
        port: 3000,
        open: true
      }
    }
  }

  // Production build: set base depending on environment
  // For GitHub Pages, build with: cross-env GITHUB_PAGES=true npm run build
  const isGitHubPages = process.env.GITHUB_PAGES === 'true'

  return {
    plugins: [react()],
    base: isGitHubPages ? '/ModernShop/' : '/',
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  }
})
