# DogMarket - Dog Nutrition Landing Page

A Next.js + Tailwind landing page for personalized dog nutrition plans with Supabase-backed lead capture, FAQ, and legal pages.

## Features
- 📣 Hero, how-it-works, product highlights, and accessible FAQ accordion
- 🐶 Intake form capturing dog details, preferences, and contact info with validation + consent
- 💾 Supabase insert-first API route with email-friendly fallback messaging
- ♿ Skip link, semantic sections, focus rings, and ARIA-friendly accordion
- 📄 Privacy Policy and Terms pages

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Create `.env.local`
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
LEADS_OWNER_EMAIL=you@yourdomain.com
```

3. Set up Supabase
- Create a project at https://supabase.com
- In the SQL editor, run the contents of `supabase-setup.sql`

4. Run the dev server
```bash
npm run dev
```
Open http://localhost:3000

## Project Structure
```
app/
  api/lead/route.ts    # Supabase insert endpoint
  page.tsx             # Landing page + intake form
  privacy/page.tsx     # Privacy policy
  terms/page.tsx       # Terms of service
components/
  Accordion.tsx        # Accessible FAQ accordion
lib/
  supabase.ts          # Supabase client
supabase-setup.sql     # Leads table + policy
```

## Notes
- If you prefer server-only keys, switch to a service role key on the API route and tighten RLS accordingly.
- The intake form posts to `/api/lead`; responses show inline success/error feedback.
