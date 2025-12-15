# Deploying to Vercel

Vercel is the easiest way to deploy your Next.js application. Here are two methods:

## Method 1: Deploy via Git (Recommended)

This method connects your Git repository to Vercel for automatic deployments.

### Step 1: Push Your Code to GitHub/GitLab/Bitbucket

1. **Create a Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DogMarket landing page"
   ```

2. **Create a Repository on GitHub**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., "dogmarket")
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/dogmarket.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Vercel

1. **Sign Up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Sign up with GitHub (recommended) for easy integration

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories listed
   - Find your `dogmarket` repository
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Select "Next.js" (should auto-detect)
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: Leave empty or `npm run build` (Next.js handles this)
   - **Output Directory**: Leave EMPTY (Next.js doesn't use a static output directory)
   - **Install Command**: `npm install` (auto-filled)
   
   **Important**: Do NOT set Output Directory to `.next` or `public`. Leave it empty for Next.js!

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add your Supabase credentials:
     - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
     - **Value**: Your Supabase project URL
     - Click "Add"
   - Add the second variable:
     - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **Value**: Your Supabase anon key
     - Click "Add"

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Automatic Deployments

- Every time you push to your `main` branch, Vercel will automatically deploy
- Pull requests get preview deployments automatically
- You can customize this in Project Settings → Git

## Method 2: Deploy via Vercel CLI (Direct Upload)

This method deploys directly from your local machine without Git.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No** (for first deployment)
- Project name? (e.g., `dogmarket`)
- Directory? **./** (current directory)
- Override settings? **No**

### Step 4: Add Environment Variables

After first deployment, add environment variables:

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Paste your Supabase URL when prompted

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Paste your Supabase anon key when prompted
```

Then redeploy:

```bash
vercel --prod
```

## Important Notes

### Environment Variables
- **Never commit `.env.local` to Git** (it's in `.gitignore`)
- Add environment variables in Vercel dashboard or via CLI
- Variables are encrypted and only available at build/runtime

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel handles SSL certificates automatically

### Build Settings
- Vercel auto-detects Next.js projects
- No additional configuration needed
- Builds are optimized automatically

### Troubleshooting

**Build Fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

**Environment Variables Not Working:**
- Make sure variable names start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

**Supabase Connection Issues:**
- Verify Supabase credentials in Vercel environment variables
- Check Supabase project is active
- Ensure database table exists

## Next Steps After Deployment

1. **Test Your Live Site**
   - Visit your Vercel URL
   - Test the form submission
   - Check Supabase dashboard for new entries

2. **Set Up Custom Domain** (Optional)
   - Add your domain in Vercel settings
   - Update DNS records

3. **Enable Analytics** (Optional)
   - Go to Project Settings → Analytics
   - Enable Vercel Analytics for insights

4. **Set Up Monitoring**
   - Vercel provides built-in monitoring
   - Check Function Logs for API route issues

## Updating Your Site

**With Git Method:**
```bash
git add .
git commit -m "Update description"
git push
# Vercel automatically deploys
```

**With CLI Method:**
```bash
vercel --prod
```

Your site is now live! 🎉

