# Milkomi Hotel Website

Production-style portfolio/pitch website for Milkomi Hotel built with:

- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- `next-intl` (English / Amharic / Afaan Oromo)
- React Hook Form
- Telegram Bot API integration via `/api/telegram`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Without these, booking/event forms will render but Telegram submission will fail.

## Asset folders

Replace placeholder SVG files with real images using the same filenames/paths under:

- `public/assets/images/hero`
- `public/assets/images/rooms`
- `public/assets/images/amenities`
- `public/assets/images/dining`
- `public/assets/images/events`
- `public/assets/images/gallery/*`
- `public/assets/images/about`
- `public/assets/images/offers`
- `public/assets/images/logo`

The UI already references these paths, so image swaps are drop-in.
