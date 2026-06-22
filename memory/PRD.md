# The Basic Ecosystem - Marketing Site

## Original Problem Statement
Premium, investor-focused single-page marketing site for "The Basic Ecosystem" — a hospitality asset platform with two verticals:
- The Basic Studio: "Design for Yield" (design + asset optimization)
- The Basic: "Operate for Growth" (hospitality operations + revenue management)

## User Choices
- Marketing site only (no backend / no DB)
- Color palette: Light blue background + orange accent (chosen by user, overriding initial sand/clay)
- Photography: Premium curated villa / hospitality imagery
- Single-page scroll layout
- Consultation form with client-side success state (no email integration)

## Architecture
- Frontend: React 19 + Tailwind + Framer Motion + shadcn/ui
- Fonts: Cormorant Garamond (display) + Outfit (body)
- Backend: untouched template (no API endpoints used)

## Implemented Sections (Dec 2026)
1. Sticky glassmorphism Navigation (Studio, Operate, Why Us, Results, Book Consultation)
2. Hero with full-bleed villa photo + dual CTA + metric strip
3. How It Works (2-step Studio → Operate, asymmetric image+text)
4. Who We Work With (5 audience tiles + secondary audience dark tile)
5. Why Choose Us (6 numbered editorial value-prop rows)
6. Results We Deliver (dark image-backed glass cards)
7. Consultation Booking (sticky left header + shadcn form with property type select)
8. Final CTA (dark navy with orange glow)
9. Footer (brand identity, ecosystem links, contact, social icons)

## Brand Palette (User Choice)
- Background: #F2F6FB · Surface: #E6EEF7
- Primary: #1F3A5F · Ink: #0F2A47
- Accent (orange): #F37C2C · Light accent: #FFB37A
- Secondary: #5A7BA0 · Border: #D3E0EE

## Backlog / Next Action Items
- P1: Real consultation form backend (Resend email integration) — currently client-side only
- P2: Replace placeholder villa photography with branded shots
- P2: Add Studio & Operate detail pages
- P3: Add case studies / portfolio section
- P3: Add owner login / portfolio dashboard
