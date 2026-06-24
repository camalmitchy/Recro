# Vercel Deployment Guide for Recro

## 📋 Configuration Summary

Your TanStack Start project has been configured for Vercel deployment with the following changes:

### ✅ Files Created/Updated:

1. **`app.config.ts`** (NEW)
   - Configures TanStack Start with Vercel preset
   - Tells the framework to build for Vercel's serverless functions

2. **`vite.config.ts`** (UPDATED)
   - Added `preset: "vercel"` to the server configuration
   - Maintains port 3000 for local development

3. **`vercel.json`** (NEW)
   - Specifies build command and output directory
   - Disables framework auto-detection to use custom config

4. **`.vercelignore`** (NEW)
   - Excludes unnecessary files from deployment
   - Keeps deployments fast and clean

5. **`package.json`** (UNCHANGED)
   - Build script is already correct: `"build": "vite build"`

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
cd "/Users/macbook/Documents/Projects/Beacon UI System"
vercel
```

4. **Follow the prompts**:
   - Set up and deploy: **Yes**
   - Which scope: Select your account
   - Link to existing project: **No** (first time)
   - Project name: **recro** (or your preferred name)
   - Directory: **./** (current directory)
   - Override settings: **No**

5. **Deploy to production**:
```bash
vercel --prod
```

---

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub**:
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Import your GitHub repository: `camalmitchy/Recro`
   - Vercel will auto-detect the configuration
   - Click **Deploy**

---

## 🔧 Environment Variables

If your project uses environment variables (like Supabase keys), add them in Vercel:

### Via Vercel Dashboard:
1. Go to your project → **Settings** → **Environment Variables**
2. Add each variable from your `.env` file

### Via Vercel CLI:
```bash
vercel env add SUPABASE_URL
vercel env add SUPABASE_ANON_KEY
# Add other variables as needed
```

**Important**: Don't commit `.env` files to GitHub!

---

## 📦 Build Configuration

The project will build with:
- **Build Command**: `npm run build`
- **Output Directory**: `.output/public`
- **Node Version**: 18.x or higher (default on Vercel)
- **Framework Preset**: Vercel (for serverless functions)

---

## ✨ What Happens During Deployment

1. Vercel installs dependencies: `npm install`
2. Runs build command: `npm run build`
3. TanStack Start builds with Vercel preset
4. Creates serverless functions for SSR
5. Deploys static assets to Vercel's CDN
6. Provides a production URL

---

## 🎯 Post-Deployment Checklist

- [ ] Test all routes (SSR and client-side navigation)
- [ ] Verify environment variables are working
- [ ] Check Supabase connection
- [ ] Test authentication flow
- [ ] Verify booking system works
- [ ] Test admin dashboard access
- [ ] Check mobile responsiveness
- [ ] Set up custom domain (optional)

---

## 🔍 Troubleshooting

### Build fails?
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set

### SSR not working?
- Confirm `app.config.ts` has `preset: "vercel"`
- Check `.output` directory is being created during build

### API routes failing?
- Verify Supabase environment variables
- Check network requests in browser DevTools

---

## 📱 Accessing Your Deployed Site

After deployment, Vercel will provide:
- **Production URL**: `https://recro.vercel.app` (or custom domain)
- **Preview URLs**: For each branch/commit
- **Deployment logs**: Available in Vercel dashboard

---

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` triggers a production deployment
- Pull requests get preview deployments
- Automatic rollbacks available

---

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [TanStack Start Docs](https://tanstack.com/start)
- [Vercel Support](https://vercel.com/support)
