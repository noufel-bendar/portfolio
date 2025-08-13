# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

3. **Your site will be live in minutes!**

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Choose your team/account
   - Confirm deployment settings

### Option 3: Deploy via GitHub Integration

1. **Connect your GitHub repo to Vercel**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Enable automatic deployments

2. **Every push to main will auto-deploy**

## Project Features Ready for Deployment

✅ **Live Demo Modals**: Speccheck and EcoVision projects now have interactive previews
✅ **Contact Form**: Working with FormSubmit integration and email fallback
✅ **Responsive Design**: Optimized for all devices
✅ **Dark Mode**: Persistent theme preference
✅ **Performance**: Optimized build with Vite
✅ **SEO Ready**: Proper meta tags and structure

## Post-Deployment

1. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

2. **Environment Variables** (If needed)
   - Add any API keys or configuration in Vercel dashboard

3. **Analytics** (Optional)
   - Add Google Analytics or other tracking

## Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **Routing issues**: The `vercel.json` handles SPA routing
- **Images not loading**: Ensure all assets are in the `src/assets` folder

Your portfolio is now ready for the world! 🚀
