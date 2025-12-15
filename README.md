# DogMarket - Premium Dog Products Landing Page

A responsive, ADA-compliant landing page for a dog products marketplace.

## Features

- 🎨 Modern, responsive design
- ♿ ADA-friendly components
- 📝 Dog details and dietary needs form
- 💾 Supabase backend integration
- 📧 Email fallback option
- 📄 Privacy and Terms pages

## Getting Started

1. Install dependencies:
```bash
npm install
```

**Note:** If you encounter dependency resolution errors, try:
```bash
npm install --legacy-peer-deps
```

If you encounter npm cache permission errors, fix them with:
```bash
sudo chown -R $(whoami) ~/.npm
```
Then run `npm install` again.

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials or email configuration.

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create a table named `dog_submissions` with the following schema:
```sql
CREATE TABLE dog_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  dog_name TEXT,
  dog_age INTEGER,
  dog_breed TEXT,
  dog_weight TEXT,
  dietary_needs TEXT,
  allergies TEXT,
  special_requirements TEXT,
  owner_name TEXT,
  owner_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Add your Supabase URL and anon key to `.env.local`

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utilities and Supabase client
└── public/          # Static assets
```

