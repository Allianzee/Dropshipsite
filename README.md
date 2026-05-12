# Dropship Store — Next.js + Vercel + Stripe

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Stripe setup

1. Create a Stripe account.
2. Use test mode first.
3. Copy your secret key into `.env.local`.
4. Never commit `.env.local`.

## Deploy on Vercel

1. Upload this project to GitHub.
2. Go to Vercel.
3. Import the GitHub repo.
4. Add environment variables:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_SITE_URL` with your Vercel URL, like `https://your-site.vercel.app`
5. Deploy.

## Important

This is a storefront template. You still need to connect real suppliers, shipping rules, return policy, taxes, privacy policy, and Stripe business verification before real sales.
