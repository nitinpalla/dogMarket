# DogMarket Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   LEADS_OWNER_EMAIL=you@yourdomain.com
   ```

3. **Supabase Database**
   - Create a Supabase project at https://supabase.com
   - In the SQL editor, run `supabase-setup.sql` to create the `leads` table and insert policy

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Features
- Hero, product highlights, how-it-works, and FAQ sections
- Accessible accordion component
- Intake form with validation + consent, posting to `/api/lead`
- Supabase insert-first API route (with owner email stored server-side)
- Privacy and Terms pages

## Project Structure
```
app/
  api/lead/route.ts
  page.tsx
  privacy/page.tsx
  terms/page.tsx
components/
  Accordion.tsx
lib/
  supabase.ts
supabase-setup.sql
```

## Customization
- Update copy directly in `app/page.tsx`
- Adjust FAQ items in `app/page.tsx` or reuse `Accordion` elsewhere
- Swap brand name, tags, and feature bullets to match your product

## Deployment
- Add the env vars above to your hosting provider
- If using a Supabase service role key, keep it server-side only and tighten RLS policies
