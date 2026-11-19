# Shashvat Giriraj — Phase 1 Starter

A Next.js full-stack starter for the official Shashvat Giriraj Group website.

## Included
- Off-white luxury design system
- Responsive homepage, navbar and footer
- Public About, Events, Yatras, Gallery, Seva, Join Us and Contact routes
- MongoDB connection helper and Event model
- Public events API
- Cloudinary server configuration placeholder
- Antigravity master implementation prompt
- Environment variable template

## Requirements
- Node.js 20.9+
- npm
- MongoDB Atlas account
- Cloudinary account

## Setup

Create a fresh Next.js app with TypeScript, Tailwind CSS, ESLint, `src/`, App Router and `@/*` alias, then copy the contents of this package into that project. Alternatively, use the included source as the starting point and merge it with the current Next.js scaffold.

Install dependencies:

```bash
npm install mongoose zod react-hook-form @hookform/resolvers framer-motion gsap lucide-react cloudinary bcryptjs next-auth@beta papaparse sonner
npx shadcn@latest init
```

Configure `.env.local` using `.env.example`.

Run:

```bash
npm run dev
```

## Important implementation notes
- The included `/api/events` GET endpoint only returns published events.
- Admin write endpoints are intentionally not included as unsecured endpoints. Add them only after server-side authentication and role checks are implemented.
- Do not expose Cloudinary API secrets in client code.
- Do not commit `.env.local`.
- Do not use real yatri personal information in test data.
- The homepage event card is illustrative content. Confirm dates, registration status and details before publishing.
- Replace the image placeholder with approved Cloudinary assets.
- Add Zod validation, rate limiting, spam protection, privacy consent and audit logging before production launch.

## Suggested next milestones
1. Confirm app boots and build succeeds.
2. Connect MongoDB and verify `/api/events`.
3. Implement secure admin authentication and first-admin provisioning.
4. Implement Event and Yatra CRUD.
5. Implement registration and payment reconciliation.
6. Implement signed Cloudinary uploads and gallery management.
7. Complete public pages, SEO, accessibility and deployment.
