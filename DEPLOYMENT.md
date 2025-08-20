# Deployment Guide for ModernShop

This guide explains how to deploy your React + Vite project to both GitHub Pages and Vercel/Netlify.

## GitHub Pages Deployment

### Prerequisites
- Your project is pushed to a GitHub repository
- `gh-pages` package is installed (already included in devDependencies)

### Steps
1. **Build for GitHub Pages:**
   ```bash
   npm run build:github
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Save settings

4. **Your site will be available at:**
   `https://[your-username].github.io/ModernShop/`

## Vercel Deployment

### Steps
1. **Connect your repository:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Configure build settings:**
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy:**
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

4. **Your site will be available at:**
   `https://[your-project-name].vercel.app`

## Netlify Deployment

### Steps
1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure build settings:**
   - Build Command: `npm run build:vercel`
   - Publish Directory: `dist`

3. **Deploy:**
   - Click "Deploy site"

4. **Your site will be available at:**
   `https://[your-site-name].netlify.app`

## Environment Detection

The project automatically detects the deployment environment:

- **GitHub Pages:** Uses base path `/ModernShop/`
- **Vercel/Netlify:** Uses base path `/`

## Troubleshooting

### Blank Screen Issues
If you see a blank screen after deployment:

1. **Check the console for errors**
2. **Verify asset paths are correct**
3. **Ensure the base path matches your deployment platform**

### Build Issues
If build fails:

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check for TypeScript errors:**
   ```bash
   npm run lint
   ```

### Local Development
For local development:
```bash
npm run dev
```

This will run on `http://localhost:3000` with the correct base path.
