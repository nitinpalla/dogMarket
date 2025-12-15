# DogMarket Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Then add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set Up Supabase Database**
   
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Navigate to the SQL Editor in your Supabase dashboard
   - Run the SQL script from `supabase-setup.sql` to create the `dog_submissions` table

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features Implemented

✅ **Responsive Landing Page**
- Hero section with brand messaging
- Product showcase section
- About/Brand copy section
- Fully responsive design (mobile, tablet, desktop)

✅ **Dog Details Form**
- Collects owner information (name, email)
- Collects dog information (name, age, breed, weight)
- Collects dietary needs and preferences
- Allergy tracking
- Special requirements field
- Form validation and error handling
- Success/error messaging

✅ **FAQ Section**
- Accordion-style FAQ component
- 8 common questions and answers
- Keyboard accessible
- Screen reader friendly

✅ **Backend Integration**
- Supabase integration for form submissions
- Email fallback option (via API route)
- Secure data handling

✅ **Legal Pages**
- Privacy Policy page (`/privacy`)
- Terms of Service page (`/terms`)
- Accessible from footer navigation

✅ **ADA Compliance**
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Screen reader friendly
- Proper heading hierarchy
- Form labels and error messages

## Project Structure

```
DogMarket/
├── app/
│   ├── api/
│   │   └── submit-form/     # API route for form submissions
│   ├── privacy/             # Privacy Policy page
│   ├── terms/               # Terms of Service page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home/landing page
├── components/
│   ├── Navigation.tsx       # Main navigation component
│   ├── Footer.tsx           # Footer component
│   ├── ProductSection.tsx   # Product showcase
│   ├── FAQ.tsx              # FAQ accordion
│   └── DogForm.tsx          # Dog details form
├── lib/
│   └── supabase.ts          # Supabase client and utilities
└── supabase-setup.sql       # Database setup script
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme. The current design uses:
- Primary: Blue (`blue-600`, `blue-700`, `blue-800`)
- Background: White and gray tones
- Text: Gray scale

### Content
- Update product information in `components/ProductSection.tsx`
- Modify FAQ questions in `components/FAQ.tsx`
- Edit brand copy in `app/page.tsx`
- Update legal pages in `app/privacy/page.tsx` and `app/terms/page.tsx`

### Email Integration
To enable email sending instead of just Supabase:
1. Install an email service package (e.g., `nodemailer`, `@sendgrid/mail`, or `resend`)
2. Update `app/api/submit-form/route.ts` with your email service
3. Add email credentials to `.env.local`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server

## Support

For issues or questions, please refer to the main README.md file.

