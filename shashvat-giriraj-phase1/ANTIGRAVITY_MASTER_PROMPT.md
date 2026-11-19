# MASTER PROMPT FOR ANTIGRAVITY
## SHASHVAT GIRIRAJ — PHASE 1 OFFICIAL WEBSITE WITH BACKEND

Act as a senior product designer, UX architect, Next.js full-stack engineer, database engineer and security-conscious technical lead.

Your task is to build and finish **Phase 1 only**: the official Shashvat Giriraj Group website, including its real backend, database integration, admin dashboard and event/yatra management workflows.

Do not introduce, mention, design, scaffold or plan any unrelated future products or phases. The entire scope is the official Shashvat Giriraj Group website and its operational backend.

The user is starting from a fresh project in Antigravity IDE. Work directly in the project workspace. Inspect the existing files before changing anything. Preserve working code and avoid overwriting user assets.

---

## 1. PRODUCT GOAL

Build a polished, production-oriented official website for Shashvat Giriraj Group, a Jain spiritual and pilgrimage community.

The website should help visitors:
- Understand the group, its purpose and values.
- Discover upcoming events and yatras.
- Read event details, itineraries and instructions.
- Register interest or submit event registrations where enabled.
- Explore approved photos and videos.
- Learn about seva and labh opportunities.
- Contact the organising team.
- Apply to volunteer.

The organising team should be able to manage public content and operational records through a secure admin dashboard.

Do not fabricate history, founders, religious leadership, endorsements, achievements, contact details, payment information or religious claims. Use clearly marked editable placeholders when verified content is not supplied.

---

## 2. STRICT VISUAL IDENTITY

The UI must use only off-white, ivory, white and neutral grey/charcoal tones.

Approved design tokens:
- Main background: #F8F7F2
- Secondary background: #F2F0E9
- Card surface: #FFFFFF
- Alternate surface: #F5F4EE
- Main text: #25251F
- Secondary text: #77766F
- Borders: #E6E4DC

No colorful UI backgrounds, gold accent UI, gradients, dark theme, neon colors or decorative color accents. Photos may retain their natural colors.

Design style:
- Luxury editorial
- Modern and minimal
- Spacious layouts and generous whitespace
- Strong typography
- Restrained borders and subtle shadows
- Large, authentic photography
- Elegant micro-interactions
- Mobile-first responsive behaviour

Typography:
- Cormorant Garamond for editorial headings
- Manrope for body and UI
- Noto Sans Gujarati when Gujarati content is shown
- Noto Sans Devanagari when Hindi/Sanskrit content is shown

Do not make it look like a generic NGO template, a conventional temple trust website or an event-booking template.

---

## 3. TECHNOLOGY

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion for interface animations
- GSAP only where justified
- Lucide React icons
- MongoDB Atlas
- Mongoose
- Next.js Route Handlers for APIs
- Auth.js for admin authentication, using a currently compatible stable configuration
- Zod for server-side validation
- React Hook Form for forms
- Cloudinary for image/video media
- Vercel for deployment

Use a modular monolith. Do not introduce microservices or a separate Express server without a compelling technical reason.

Check installed package versions and official compatibility before implementation. Do not blindly downgrade or install conflicting dependencies.

---

## 4. PUBLIC SITEMAP

Implement these routes:

- `/` — Homepage
- `/about` — About the group
- `/vision-mission` — Vision and mission
- `/events` — Published events
- `/events/[slug]` — Event detail
- `/yatras` — Published yatras
- `/yatras/[slug]` — Yatra detail and itinerary
- `/gallery` — Approved gallery
- `/seva` — Seva and labh information
- `/join-us` — Volunteer/community form
- `/contact` — Contact form
- `/privacy-policy`
- `/terms`

Use route groups and shared layouts where appropriate. Public navigation should remain concise: Home, About, Events, Yatras, Gallery, Seva and Contact. Include a subtle “Join Our Journey” CTA.

---

## 5. HOMEPAGE REQUIREMENTS

Create a premium responsive homepage with:

1. Sticky, initially transparent or clean off-white navbar; on scroll it can use a subtle off-white backdrop and border.
2. Hero with large editorial heading: “Where Faith Becomes a Journey.”
3. Supporting copy about devotion, spirituality and meaningful journeys.
4. Two clear CTAs: Explore Our Yatras and Our Story.
5. About introduction in an editorial split layout.
6. Featured upcoming event, populated from published database content rather than hardcoded event records.
7. Our philosophy: Faith, Devotion, Togetherness.
8. Selected photo gallery.
9. Community/join CTA.
10. Refined footer with navigation, verified social links and legal links.

Do not hardcode a specific event as an active upcoming event. If the database has no published event, show a tasteful empty state or hide the featured event section.

---

## 6. PUBLIC PAGE REQUIREMENTS

### About
- Group introduction
- Purpose and values
- Vision and mission links
- Approved photographs
- No invented history or names

### Events
- List published events only
- Search/filter by category if useful
- Display title, date, location, cover image and status
- Correct empty/loading/error states
- Event detail page with description, schedule, venue, instructions, registration status and contact details

### Yatras
- List published yatras
- Individual detail pages
- Itinerary with ordered days/activities
- Travel/accommodation information only when supplied
- Important instructions
- Registration CTA only when registration is open

### Gallery
- Cloudinary-hosted approved assets
- Responsive masonry/editorial grid
- Lazy loading
- Accessible lightbox
- Alt text and captions
- Do not expose private yatri photos or personal data

### Seva
- Respectful, transparent information
- Only publish verified opportunities and approved labharthi details
- No fake donation buttons or payment claims

### Join Us
- Name, age where genuinely required, city, phone, email, volunteer interest and message
- Consent and privacy notice
- Server-side validation and spam/rate-limit protection

### Contact
- Verified contact details only
- Contact form with validation and spam protection
- WhatsApp link only when an actual number is supplied

---

## 7. BACKEND AND DATABASE

Create Mongoose models with timestamps, validation, indexes and appropriate relationships.

Collections:
- Admin/User
- Event
- Yatra
- Registration
- Payment
- GalleryAsset
- SevaOpportunity
- VolunteerApplication
- ContactEnquiry
- SiteSettings
- AuditLog

Use stable MongoDB ObjectIds and references. Avoid duplicating large nested records unnecessarily.

### Event fields
- title
- slug
- description
- coverImage
- eventDate
- endDate (optional)
- location
- category
- registrationOpen
- registrationCapacity (optional)
- registrationInstructions
- itinerary
- status: draft/published/completed/cancelled
- SEO title/description
- timestamps

### Yatra fields
- title
- slug
- description
- destination
- startDate
- endDate
- coverImage
- itinerary items in order
- travel/accommodation details when verified
- instructions
- registrationOpen
- status
- timestamps

### Registration fields
- eventId or yatraId
- fullName
- age only if required
- gender only if operationally necessary
- city
- WhatsApp/mobile number
- email optional
- emergency contact only if justified
- registrationStatus
- paymentStatus
- amountPayable
- amountPaid
- admin notes
- consent
- timestamps

Do not collect unnecessary personal information. Restrict access to registration and payment records.

### Payment fields
- registrationId
- amount
- payment method
- transaction/reference ID
- status
- recordedBy
- reconciliation status
- timestamps

Never store card details, UPI PINs, passwords or banking credentials. Do not mark a payment paid based only on a user-submitted screenshot. Record payment verification/reconciliation separately.

---

## 8. API REQUIREMENTS

Implement public read endpoints and protected admin mutation endpoints.

Examples:
- `GET /api/events`
- `GET /api/events/[slug]`
- `GET /api/yatras`
- `GET /api/yatras/[slug]`
- `GET /api/gallery`
- `POST /api/registrations`
- `POST /api/contact`
- `POST /api/volunteers`

Protected admin endpoints:
- Event create/update/delete/publish
- Yatra create/update/delete/publish
- Registration list/detail/status updates
- Payment recording and reconciliation
- Gallery asset management
- Seva management
- Site settings management
- Dashboard summary

Use:
- Zod validation on the server
- Authentication and role authorization on every admin endpoint
- Rate limiting on public form endpoints
- Safe error responses
- Consistent response structures
- Pagination for admin lists
- Filtering and search
- Audit logs for sensitive admin actions

Never expose an unsecured POST/PATCH/DELETE endpoint for content management.

---

## 9. ADMIN DASHBOARD

Build a protected `/admin` dashboard with:

- Dashboard overview
- Events
- Yatras
- Registrations
- Payment records
- Gallery
- Seva/labh
- Volunteer applications
- Contact enquiries
- Site settings
- Admin/user management where required
- Audit log

Roles:
- Super Admin
- Event Manager
- Registration Manager
- Gallery Manager
- Content Editor
- Read-only Viewer

Use server-side route protection and permission checks. Hiding a button is not authorization.

First-admin provisioning must be a secure, documented server-side process or one-time seed script. Do not expose public admin signup. Never hardcode real credentials.

Dashboard should have:
- Search
- Pagination
- Filters
- Confirmation dialogs
- Loading states
- Empty states
- Error states
- Success feedback
- CSV/Excel-compatible export, preserving data correctly

---

## 10. CLOUDINARY

The user will provide Cloudinary images and videos.

Create central configuration and media helper components.

Use Cloudinary for:
- Logo
- Homepage hero
- About images
- Event covers
- Yatra covers
- Gallery photos/videos

Requirements:
- Do not invent Cloudinary URLs.
- Use placeholders until real assets are supplied.
- Use descriptive alt text.
- Use responsive transformations.
- Use lazy loading.
- Validate upload type and size.
- Use signed uploads or secure server-side upload flows.
- Never expose Cloudinary API secret in browser code.
- Store public IDs and metadata in MongoDB, not only raw URLs.
- Configure allowed remote image domains/patterns.

---

## 11. SECURITY AND PRIVACY

Before production:
- Secure admin authentication
- Role-based authorization
- Server-side validation
- Rate limiting and spam protection
- Secure cookies and session handling
- CSRF protections appropriate to the auth strategy
- Safe file upload validation
- Environment secrets outside source control
- Database least-privilege access
- Backups and recovery
- Audit logs
- Privacy consent and retention policy
- Restricted access to yatri and payment data
- No public exposure of private media

Do not claim legal compliance without review. Provide privacy-policy placeholders for the owner to verify.

---

## 12. PERFORMANCE, SEO AND ACCESSIBILITY

Implement:
- Next.js metadata
- Open Graph
- Canonical URLs where appropriate
- Sitemap and robots.txt
- Structured data only where accurate
- Optimised Cloudinary delivery
- Lazy loading
- Responsive images
- Semantic HTML
- Keyboard navigation
- Accessible labels and focus states
- Reduced-motion support
- Good colour contrast
- Fast mobile performance
- Loading, error and empty states

Animations must be elegant and restrained. Do not hijack scrolling or create motion that harms usability.

---

## 13. DEVELOPMENT WORKFLOW

Work in small, verifiable milestones:

### Milestone A — Foundation
- Inspect repo
- Confirm Next.js setup
- Install compatible dependencies
- Configure design tokens/fonts
- Build shared layout, navbar and footer
- Build responsive homepage

### Milestone B — Public content
- About, Vision/Mission
- Events list/detail
- Yatras list/detail
- Gallery
- Seva
- Join Us
- Contact

### Milestone C — Database
- MongoDB connection
- Mongoose models
- Indexes
- Seed safe sample content only
- Public read APIs

### Milestone D — Admin and operations
- Secure authentication
- First-admin setup
- Role permissions
- Admin dashboard
- Event/yatra CRUD
- Registration management
- Payment records/reconciliation
- Export

### Milestone E — Media and launch
- Cloudinary signed uploads
- Gallery management
- SEO
- Accessibility
- Security review
- Production build
- Deployment documentation

Do not claim a feature is complete until it works end-to-end.

---

## 14. CODING RULES

- Inspect existing files before editing.
- Use TypeScript strictly.
- Avoid `any` unless justified.
- Prefer server components; use client components only for interactivity.
- Keep components reusable and focused.
- Keep business logic in services, not UI components.
- Keep database access server-side.
- Do not expose secrets.
- Do not create fake buttons.
- Do not leave dead links.
- Do not use invented contact details.
- Do not hardcode operational event status.
- Add robust loading/error/empty states.
- Run lint and production build after meaningful milestones.
- Fix errors before proceeding.
- Document setup and required environment variables.
- Do not rewrite the entire application when a focused change is sufficient.

---

## 15. FIRST TASK

Start by inspecting the current workspace and identifying whether it contains a Next.js project.

Then:
1. Report the existing project structure.
2. Create or correct the Next.js foundation.
3. Establish the off-white design system.
4. Implement navbar, footer and the responsive homepage.
5. Add the public route placeholders with consistent layouts.
6. Run the application and production build.
7. Report exactly what works and what remains.

Do not attempt to implement every backend feature in one enormous change. Work milestone by milestone, keeping the project runnable after each milestone.

The quality bar is a premium, modern, luxury editorial website with a reliable, secure and maintainable backend.
