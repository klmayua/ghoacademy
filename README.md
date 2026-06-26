# GHO Academy — Complete Platform
## Global Public Health Innovation, Entrepreneurship & Leadership

Built for Dr. Luchuo Engelbert Bain / Global Health Otherwise
Tech stack: Astro 7 · Tailwind CSS v4 · TypeScript · Node 22

---

## 28 Pages Built

### Marketing
- `/` — Full landing page (all 11 sections)
- `/apply` — Registration form with 3-tier pricing
- `/confirm` — Post-payment confirmation
- `/terms` — Terms of Enrolment
- `/privacy` — Privacy Policy

### Auth
- `/login` — Sign in
- `/forgot-password` — Password reset
- `/logout` — Sign out

### LMS Dashboard (student)
- `/dashboard` — Main dashboard
- `/dashboard/courses` — All 10 modules
- `/dashboard/courses/module-[1-10]` — Per-module pages (video, assignment, discussion, resources)
- `/dashboard/schedule` — Full session schedule
- `/dashboard/community` — Discussion + cohort directory + WhatsApp
- `/dashboard/alumni` — Alumni network (locked until certificate)
- `/dashboard/resources` — Resource library
- `/dashboard/profile` — Profile / password / notifications

### Admin
- `/admin` — KPI overview dashboard
- `/admin/participants` — Participant table with search/filter
- `/admin/cohorts` — Cohort management

### API Stubs
- `/api/register` — Registration + Stripe (needs server mode)
- `/api/auth/login` — Auth handler (needs server mode)

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to /dist
npm run preview    # preview built site
```

---

## Environment Variables (.env)

```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_EARLY_BIRD_PRICE_ID=price_...
STRIPE_STANDARD_PRICE_ID=price_...
FLUTTERWAVE_SECRET_KEY=FLWSECK_...
RESEND_API_KEY=re_...
DATABASE_URL=postgresql://...
JWT_SECRET=<64-char-random>
SITE_URL=https://academy.globalhealthotherwise.com
```

---

## Phase 1 Launch (No Backend Required)

For Cohort 1, skip the backend entirely:
1. Replace form in `/apply` with Tally.so embed
2. Update `stripeLink` in `src/data/site.ts` with real Stripe Payment Link
3. Use Zoom for sessions (links already in `/dashboard/schedule`)
4. Use Notion as student portal (share link post-payment)
5. Deploy static build to Netlify / Cloudflare Pages

---

## Production Deployment (Server Mode)

Switch from static to server for API routes:

```js
// astro.config.mjs
import netlify from '@astrojs/netlify';
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite: { plugins: [tailwindcss()] }
});
```

Then wire up `/src/pages/api/register.ts` and `/src/pages/api/auth/login.ts`
(implementation instructions are inside each file).

---

## Key Files

- `src/data/site.ts` — All content, copy, modules, pricing (edit here first)
- `src/styles/global.css` — Design tokens (Navy/Gold/Teal/Cream)
- `src/layouts/` — BaseLayout, DashboardLayout, AdminLayout
- `src/components/marketing/` — All 8 landing page sections

## Brand Colours
- Navy `#0B1C3D` — Primary dark
- Gold `#C9922A` — Accent / CTA
- Teal `#00A896` — Secondary / success
- Cream `#F5F3EE` — Light background

## Fonts
- Display: Barlow Condensed (700/800) — Google Fonts
- Body: Inter (400/500/600) — Google Fonts
- Icons: Tabler Icons — CDN (free)

---

Contact: lebaiins@gmail.com | globalhealthotherwise.com
