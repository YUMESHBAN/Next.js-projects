## Flatter · Real Estate Landing Page

Fully responsive, pixel-accurate landing page inspired by the provided mock, powered by **Next.js App Router + TypeScript + TailwindCSS**, with **Sanity v4** supplying every piece of content (text, numbers, media, CTAs, cards, testimonials). Interactions include hero/section animations (Framer Motion), estimator logic (React Hook Form), testimonial slider with SWR-powered updates, sticky navigation, and smooth scroll anchors.

### 🧱 Tech Stack
- Next.js 16 (App Router) + TypeScript in strict mode
- TailwindCSS with custom design tokens
- Sanity Studio (`/studio`) + @sanity/client for GROQ queries
- SWR for live testimonial refreshes
- React Hook Form + Framer Motion + custom utilities

---

## 1. Getting Started

```bash
npm install

# Duplicate .env.example (if present) or set the following:
NEXT_PUBLIC_SANITY_PROJECT_ID=95guc3hh
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
SANITY_API_TOKEN=<writer token for the project>

# Seed CMS content + assets (requires SANITY_API_TOKEN)
npm run seed

# Run Next.js app + the Sanity Studio
npm run dev         # http://localhost:3000
npm run studio      # http://localhost:3333/studio
```

- `npm run build && npm start` – production build
- `npm run lint` – ESLint (Next preset)
- `npm run studio:build` / `npm run studio:deploy` – Sanity hosting commands

---

## 2. Structure
```
src/
  app/               App Router, API routes, global layout/styles
  components/        UI primitives (Header, Footer, Button, TestimonialSlider)
  sections/          Page sections mirroring the design reference
  lib/               Sanity client + helpers
  types/             Shared CMS typings
sanity/
  schemas/           All required documents (siteSettings, hero, highlightCard, etc.)
  config/            Client + env helpers
  seed/              Data definitions + `run-seed.ts` script
```

Key API routes:
- `POST /api/contact` – validates payload (Zod) then creates `contactSubmission` in Sanity.
- `GET /api/testimonials` – returns testimonials, consumed via SWR for the slider.

---

## 3. Features Implemented
- **Header**: sticky, desktop nav + mobile drawer, CMS-driven links, CTA button.
- **Hero**: number markers, copy, CTA, featured property with caption + yellow scroll button.
- **Search Banner**: black card with thumbnail + scroll arrow, CMS headline.
- **Journey Section**: left/right text blocks + three black cards with CTAs/icons.
- **Popular Neighborhoods**: cards with Sanity images/prices/descriptions, CTA buttons.
- **Estimator**: four dropdowns backed by Sanity options, React Hook Form logic, animated monthly estimate + cost breakdown, CTA buttons.
- **About**: headline + stat bar + supporting image.
- **Service Area**: map image with animated pins + location cards.
- **Testimonials**: accessible slider, SWR auto-refresh, Framer Motion transitions + autoplay.
- **Final CTA** + floating scroll-to-top arrow and **Footer** with CMS links/social icons.

All sections inherit the provided color palette, spacing rhythm, and typography (Space Grotesk). Responsive layouts follow the desktop/tablet/mobile behavior in the mock.

---

## 4. Sanity Studio + Schemas
Schemas live in `sanity/schemas/` and match the spec:
- `siteSettings`, `hero`, `highlightCard`, `featureSection`, `popularNeighborhood`, `estimatorSection`, `aboutUs`, `serviceArea`, `testimonial`, `contactSubmission`.
- Every text snippet, number, CTA label, card, testimonial, stat, and list item is editable in Studio.

### Seeding
`npm run seed` uploads Unsplash images and creates documents using `sanity/seed/run-seed.ts`. Requires a `SANITY_API_TOKEN` with write permissions. The script is idempotent (uses fixed `_id`s) so you can rerun it safely.

---

## 5. Content Consumption
- `sanity/lib/queries.ts` centralizes GROQ queries (site content + reusable testimonials query).
- `src/lib/sanity.ts` exposes a cached fetch helper for server components.
- Testimonials are fetched on the server for initial paint and revalidated client-side with SWR.
- All components receive typed data from `src/types/sanity.ts`.

---

## 6. Testing & QA Checklist
- `npm run lint` (Next + TypeScript rules)
- Visual regression: compare against provided mock (spacing/typography tokens replicate design)
- Responsive checks at 360px / 768px / 1280px / 1440px
- Manually test:
  - Header sticky + mobile drawer
  - Hero + CTA anchors
  - Estimator dropdowns & animated totals
  - Testimonials slider (auto-rotate + manual controls + keyboard focus)
  - `/api/contact` POST with valid/invalid payloads
  - `/api/testimonials` GET
- Confirm Sanity Studio surfaces all fields and seed command populates data

---

## 7. Deployment Notes
- Set environment variables on the hosting platform (Next + Sanity token).
- Run `npm run build` before deploying the Next app.
- Deploy the studio separately if using Sanity Studio hosting, or host at `/studio` via Next custom server.

Enjoy building with Flatter! 🎉
