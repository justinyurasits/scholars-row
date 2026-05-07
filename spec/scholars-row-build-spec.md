# Scholar's Row — Claude Code Build Spec

**For Claude Code, executing the production build of scholarsrowgroup.com**

This document is the contract between the design work completed in chat and the production code Claude Code will produce. Read it in full before starting. The companion file `scholars_row_prototype_v3-1.html` is the **visual source of truth** for the homepage — every design token, layout decision, and copy line in this spec is grounded there.

---

## Part 1 — Project Context

### What Scholar's Row is

Scholar's Row is a **boutique academic housing developer** building residences for graduate students, medical residents, and visiting faculty near serious research universities. The company is **pre-operational** — the first community opens in Santa Clara in 2027.

### Strategic positioning (locked)

- **Product:** boutique, premium, quiet, walkable, designed for serious academic life. Studio / 1BR / 2BR layouts.
- **Audience:** the *serious graduate student* broadly defined — PhDs in any discipline, medical residents, law students, visiting faculty. Not undergraduates. Not party housing.
- **Markets:** Four announced — Santa Clara (flagship), Berkeley, Worcester, Evanston. Santa Clara opens 2027.
- **Voice:** institutional, measured, editorial. Quietly confident. Never lifestyle-brand. Never rental-brochure cadence.
- **Frame:** pre-operational, honest. Renderings labeled. No fake testimonials. No fictional occupancy stats.

### Critical language constraints

These are non-negotiable. Earlier drafts used language we have explicitly removed:

- **No "long-term holders" / "owned for decades" / "ten years later" language.** Some early buildings may sell as condos for capital reasons. Public-facing language must be true regardless of ownership horizon.
- **The product is "residences."** Not "apartments." Not "homes." "Apartment" only as a unit-type descriptor (e.g., "studio apartments").
- **No corporate jargon, no SaaS-isms.** Editorial register only.

### Audience priority

1. **Future residents** (primary, leads the homepage)
2. **Universities** (deep secondary — own page and CTA route)
3. **Capital partners** (deep secondary — own page and CTA route)
4. **Brokers / land partners** (tertiary — addressed on the Locations page)

---

## Part 2 — Tech Stack (locked)

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15, App Router | Best-in-class for content sites with structured data, SEO, and easy Vercel deployment |
| Styling | Tailwind CSS v4 + custom CSS variables for design tokens | Tailwind for layout/utility, raw CSS variables for the design system tokens that match the prototype exactly |
| Content | Markdown files with frontmatter, parsed at build time | Locations and articles live in `/content/`. Edit in any text editor. Version-controlled. |
| Type | Google Fonts (Fraunces, Inter Tight, JetBrains Mono) loaded via `next/font` | Same fonts as prototype |
| Forms | `mailto:` links for v1. No backend. | Simplest possible. Upgrade later. |
| Hosting | Vercel | Native Next.js, free tier sufficient, custom domains trivial |
| Analytics | Vercel Analytics + Plausible (privacy-friendly) — Plausible optional v2 | Lightweight, no GDPR cookie banner needed for Vercel Analytics |
| Domain | scholarsrowgroup.com | Currently on Webflow. Migration planned post-launch. |

**Do not use:**
- React server components for things that could be static (most pages here are static)
- Any state management library (no Redux, no Zustand) — there is no client state
- Any animation library (Framer Motion, GSAP) — animations are CSS-only via the `.reveal` IntersectionObserver pattern from the prototype
- Any UI library (shadcn, Radix, Headless UI) — components are bespoke, matching the editorial design system exactly. Do not import generic component primitives.

---

## Part 3 — File Structure

```
scholars-row/
├── app/
│   ├── layout.tsx                    # Root layout: header, footer, fonts, metadata
│   ├── page.tsx                      # Homepage — see Part 5
│   ├── globals.css                   # Design tokens, base styles, .reveal animations
│   ├── living-here/
│   │   └── page.tsx                  # The deep resident page — see Part 6
│   ├── locations/
│   │   ├── page.tsx                  # Locations index
│   │   └── [slug]/
│   │       └── page.tsx              # Dynamic location detail page
│   ├── about/
│   │   ├── page.tsx                  # Platform, methodology, insights
│   │   └── insights/
│   │       ├── page.tsx              # Insights index
│   │       └── [slug]/
│   │           └── page.tsx          # Article detail
│   ├── team/
│   │   ├── page.tsx                  # Founders, advisors
│   │   └── partners/
│   │       └── page.tsx              # University / development / investor partner content
│   └── contact/
│       └── page.tsx                  # Three-route CTA page (mirrors homepage CTA)
│
├── components/
│   ├── Header.tsx                    # Fixed header with scroll state
│   ├── Footer.tsx                    # 5-column footer
│   ├── Eyebrow.tsx                   # Mono eyebrow with optional rule
│   ├── Button.tsx                    # btn-primary, btn-ghost, btn-ink variants
│   ├── TextLink.tsx                  # Mono uppercase text link with arrow
│   ├── SectionHeader.tsx             # Section meta + headline pattern
│   ├── DayPassage.tsx                # Time + serif text passage (Day at SR)
│   ├── LocationCard.tsx              # Standard + flagship variants
│   ├── SpecRow.tsx                   # Label + value spec sheet rows
│   ├── PillarCell.tsx                # Roman numeral + title + body
│   ├── CTARoute.tsx                  # Standard + lead variants
│   ├── HeroGeometry.tsx              # Inline SVG building elevation
│   ├── FloorPlanSchematic.tsx        # Inline SVG abstract floor plan
│   ├── WalkDiagram.tsx               # Inline SVG residence → path → university
│   └── RevealOnScroll.tsx            # IntersectionObserver wrapper
│
├── content/
│   ├── locations/
│   │   ├── santa-clara.md            # Flagship
│   │   ├── berkeley.md
│   │   ├── worcester.md
│   │   └── evanston.md
│   └── insights/
│       ├── graduate-housing-thesis.md
│       ├── acoustic-isolation.md
│       └── eleven-minute-walk.md
│
├── lib/
│   ├── content.ts                    # Markdown parser, frontmatter loader
│   └── types.ts                      # TypeScript types for Location, Article
│
├── public/
│   └── (assets when added)
│
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Part 4 — Design System (locked from prototype)

**The HTML prototype is the source of truth.** Every value below is taken from `scholars_row_prototype_v3-1.html`. Do not improvise.

### Colors (CSS variables)

```css
:root {
  --ink:        #0F1B2D;     /* deep navy, near-black */
  --ink-soft:   #1F2D44;     /* navy a hair lighter */
  --slate:      #4A5468;     /* secondary text */
  --slate-soft: #7A8294;     /* tertiary, captions */
  --field:      #F5F1EA;     /* warm off-white, paper-like */
  --field-deep: #EBE5DA;     /* slightly deeper paper */
  --rule:       #D6CFC2;     /* hairline rules on field */
  --rule-dark:  #2A3A52;     /* hairline rules on ink */
  --accent:     #8C2F2A;     /* restrained oxblood */
  --accent-warm:#B5895C;     /* aged brass, used sparingly */
  --white:      #FCFAF6;     /* near-white for inverted areas */
}
```

### Typography

Loaded via `next/font/google`:

```ts
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
})
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})
```

CSS variables:

```css
--serif: var(--font-serif), "GT Sectra", "Tiempos", Georgia, serif;
--sans:  var(--font-sans), "Söhne", -apple-system, BlinkMacSystemFont, sans-serif;
--mono:  var(--font-mono), "IBM Plex Mono", monospace;
```

**Type usage rules:**
- Display headlines → serif, weight 300, letter-spacing -0.02em, line-height 1.05–1.15. Italics for accent words only.
- Body copy → sans, weight 300 on dark backgrounds, weight 400 on light. Line-height 1.6–1.7.
- Eyebrows / metadata / specs → mono, weight 500, uppercase, letter-spacing 0.18em, font-size 0.65–0.7rem.
- Numbers / timestamps / specs → mono with `font-feature-settings: "tnum"` for tabular alignment.

### Spacing scale

```css
--space-1: 0.5rem;
--space-2: 1rem;
--space-3: 1.5rem;
--space-4: 2.5rem;
--space-5: 4rem;
--space-6: 6rem;
--space-7: 9rem;
--space-8: 12rem;
```

Section vertical padding defaults to `--space-7` top and bottom.

### Easing & motion

```css
--ease: cubic-bezier(0.22, 0.61, 0.36, 1);
```

Reveal-on-scroll: 20px translateY, 0.9s transition, fires when 15% into viewport, root margin -10% bottom. CSS-only, IntersectionObserver-driven. **No JS animation libraries.**

Hero entrance: staggered `rise` keyframe (24px translateY, 1.2s ease) with delays of 0.2s, 0.4s, 0.6s, 0.8s, 1s on the eyebrow, headline, sub, meta, and CTAs respectively.

### The paper grain

Body has a fixed pseudo-element with an inline SVG fractal-noise filter, opacity 0.4, mix-blend-mode multiply. **This is critical to the editorial feel** — do not omit. Lift the SVG data URL directly from the prototype.

### Container widths

- `.container` → max 1320px, horizontal padding `clamp(1.5rem, 4vw, 3rem)`
- `.container-narrow` → max 880px, same padding (used for Day at Scholar's Row)

---

## Part 5 — The Homepage (build first)

The homepage is locked at six sections. **Reproduce `scholars_row_prototype_v3-1.html` exactly in React component form.** Do not redesign. Do not "improve" copy. Do not add sections.

### Section order

```
Header (fixed)
Hero
§ 01 — A day at Scholar's Row
§ 02 — The residence (with floor plan + walk diagram)
§ 03 — Locations (flagship + 3 cards)
§ 04 — The standard (3 principles)
§ 05 — Get in touch (3 CTA routes, resident leads)
Footer
```

### Component breakdown

Each section in the prototype has a clear component structure. Build these as named React components, not inline JSX:

- `<Hero />` — fixed height, dark, geometry SVG background, two-column content with right-side meta panel and CTAs. Hero CTAs are `<Button variant="primary">Step inside a residence</Button>` and `<Button variant="ghost">For universities & investors</Button>`.
- `<DayAtScholarsRow />` — five `<DayPassage time={} text={} />` items inside a `<section>` with a narrow container.
- `<TheResidence />` — two-cell grid. Left cell uses `<FloorPlanSchematic />` and a 4-cell spec block. Right cell uses `<WalkDiagram />` and a 2-cell spec block.
- `<HomepageLocations />` — four `<LocationCard />` items, Santa Clara passed as `flagship` prop. Locations data loaded from `/content/locations/*.md`.
- `<TheStandard />` — three `<PillarCell />` items in a hairline grid.
- `<GetInTouch />` — three `<CTARoute />` items, resident has `lead` prop, mailto links.

### Mailto wiring (exact strings)

```
Resident:
mailto:waitlist@scholarsrowgroup.com?subject=Scholar%27s%20Row%20Waitlist%20%E2%80%94%20Future%20Resident&body=Hello%2C%0A%0AI%27d%20like%20to%20join%20the%20Scholar%27s%20Row%20waitlist.%0A%0AName%3A%20%0AProgram%2FUniversity%3A%20%0AAnticipated%20start%20year%3A%20%0ANotes%3A%20%0A%0AThank%20you.

University:
mailto:partnerships@scholarsrowgroup.com?subject=Scholar%27s%20Row%20%E2%80%94%20University%20Partnership%20Inquiry&body=Hello%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20partnership%20with%20Scholar%27s%20Row.%0A%0AName%3A%20%0ARole%3A%20%0AInstitution%3A%20%0ANature%20of%20inquiry%3A%20%0A%0AThank%20you.

Investor:
mailto:investors@scholarsrowgroup.com?subject=Scholar%27s%20Row%20%E2%80%94%20Investor%20Overview%20Request&body=Hello%2C%0A%0AI%27d%20like%20to%20request%20the%20Scholar%27s%20Row%20investor%20overview.%0A%0AName%3A%20%0AFirm%3A%20%0ARole%3A%20%0ANature%20of%20inquiry%3A%20%0A%0AThank%20you.
```

**Note for Justin:** these three email aliases need to be created at scholarsrowgroup.com. Until they exist, mail to those addresses bounces. Easy fix: forward all three to a single inbox.

---

## Part 6 — The Living Here Page (build second)

This is the deep resident page. The homepage's § 02 promises it via the "See more on Living Here →" link. Living Here must deliver.

### Section order (recommended — Claude Code may propose alternatives once design tokens are locked)

```
Header (fixed)
Hero — "Designed around the work you came here to do"
§ 01 — Who lives here (paragraph defining the audience)
§ 02 — Inside the residence (deeper version of homepage § 02 left card; layouts, materials, daylight, spec)
§ 03 — Quiet by design (acoustic engineering — STC, mechanical isolation, window assemblies)
§ 04 — The walk (deeper version of homepage § 02 right card; site selection criteria)
§ 05 — Healthy by standard (IAQ, daylight, materials)
§ 06 — A day at Scholar's Row (longer narrative — 7-8 passages instead of 5)
§ 07 — What's included / what's not (honest list)
§ 08 — How residency works (waitlist, application, lease — pre-operational framing)
§ 09 — Get in touch (resident-only CTA — single primary mailto, no three-route)
Footer
```

### Voice on this page

This is the page where felt experience earns its keep. **Write vividly, but stay in the institutional register.** No "Welcome home." No "Make it yours." No "Thrive." Specific, concrete, occasionally lyrical. The prototype's "Day at Scholar's Row" passages are the model.

### Visual treatment

Same design system as homepage. Same dark/light section rhythm. The page should feel like the homepage's depth dimension, not a different brand.

When real renderings or photographs become available, this is the page they belong on first. Until then, use the same SVG schematic / diagram language as the prototype.

---

## Part 7 — Other Pages (build after homepage + Living Here)

### Locations index (`/locations`)

- Hero — "Where we're building"
- "How we choose markets" — 6 criteria as a small spec grid
- The 4 location cards (same as homepage but expanded — pull from `/content/locations/`)
- Submit-a-site form section for brokers / land partners (mailto)
- FAQ section

### Location detail (`/locations/[slug]`)

Generated dynamically from `/content/locations/*.md`. Template:

- Hero with rendering label, location name, status pill
- Why this market (thesis paragraphs)
- The community (specs)
- Walking distance to (anchor list, simple)
- Renderings (placeholder slot for now)
- Project timeline (milestone strip)
- Get involved (3-route mailto block)

Santa Clara gets the most polish since it's flagship. Berkeley/Worcester/Evanston use the same template with less content.

### About (`/about`)

- Hero — "A boutique academic housing platform"
- What we do (Develop / Own / Operate / Steward — 4 cells)
- How we choose sites (6 criteria expanded)
- How we build (sustainability / technology / design standards)
- Insights index (3-card grid pulling from `/content/insights/`)
- Press & news (slot)

### Insights detail (`/about/insights/[slug]`)

Standard article template:
- Hero with category eyebrow, date, title, read time
- Long-form prose with serif body text, generous max-width (~720px)
- Author byline at end
- "Continue reading" — 2 related articles

### Team (`/team`)

- Hero — "Built by people who've spent careers thinking about how serious places get built"
- Founders — 3 placeholder cards (Justin will fill in bios later)
- Advisors slot (optional)
- Partners → links to `/team/partners`
- Careers — single paragraph, single email

### Team / Partners (`/team/partners`)

Three sub-sections on one page:
- University partnerships (with mailto)
- Development partners (with logo wall slot)
- Investor relations (substantive — thesis, target project profile, governance, mailto)

### Contact (`/contact`)

Mirrors the homepage § 05 CTA section, expanded slightly. Three mailto routes. FAQ block at bottom.

---

## Part 8 — Content Models (markdown frontmatter)

### Location markdown (`/content/locations/santa-clara.md`)

```yaml
---
slug: santa-clara
name: Santa Clara
state: California
state_code: CA
flagship: true
status: In development
status_pill: in-development     # in-development | site-evaluation | underwriting | open
units: 15
walk_minutes: 9
opening_year: 2027
anchors:
  - Stanford University
  - Santa Clara University
  - Santa Clara University Law School
thesis: |
  Adjacent to Stanford University and Santa Clara University's law and graduate programs.
  The first Scholar's Row community to open.
order: 1
---

# Santa Clara, California

Long-form prose about the market, the project, the timeline. Multiple paragraphs.
```

### Insights / article markdown (`/content/insights/example.md`)

```yaml
---
slug: graduate-housing-thesis
title: Why graduate housing is structurally undersupplied — and likely to stay that way
category: Market thesis
date: 2026-04-15
read_minutes: 7
excerpt: |
  The market has spent two decades building for undergraduates. Graduate enrollment
  kept growing. The gap is not a cyclical mispricing.
order: 1
---

# Article body in markdown
```

### Initial content to seed

Claude Code should create these files with placeholder content matching the structure:
- 4 locations (Santa Clara, Berkeley, Worcester, Evanston) — pull existing copy from prototype
- 3 insights articles — Claude Code writes plausible drafts. Justin will rewrite. Topics:
  1. *Why graduate housing is structurally undersupplied*
  2. *Acoustic isolation as a graduate-housing primitive*
  3. *The eleven-minute walk: a framework for academic housing site selection*

---

## Part 9 — SEO, Metadata, Accessibility

### Per-page metadata

Every page exports a `generateMetadata` or static `metadata` object in App Router:

```ts
export const metadata = {
  title: 'Scholar\'s Row — Boutique Academic Housing',
  description: 'Boutique residences for graduate students, medical residents, and visiting faculty — within walking distance of serious universities.',
  openGraph: {
    title: 'Scholar\'s Row',
    description: '...',
    url: 'https://scholarsrowgroup.com',
    siteName: 'Scholar\'s Row',
    type: 'website',
  },
}
```

Each location page overrides with location-specific metadata. Each article overrides with article-specific.

### `robots.txt` and `sitemap.xml`

Generate dynamically from Next.js. Include all static routes plus dynamic location/article routes.

### Accessibility checklist (must hit)

- All interactive elements have visible focus states (use `:focus-visible`, not `:focus`, to avoid focus rings on mouse clicks)
- Color contrast: navy on warm-off-white = 14:1 (passes AAA). Brass on navy = ~3.8:1 (use sparingly, never for body text — only for accent eyebrows and links where context makes them clearly secondary)
- All `<a>` elements with mailto include descriptive aria-labels
- Skip-to-content link at top of page (visually hidden until focused)
- Headings in proper hierarchy (one h1 per page, then h2 → h3, no skipping)
- Reveal-on-scroll respects `prefers-reduced-motion: reduce` — fade-in only, no transform

### Performance targets

- LCP under 2.0s
- CLS under 0.05
- All images use `next/image` with explicit width/height
- Fonts loaded with `display: swap`
- No render-blocking JS

---

## Part 10 — The Header (one detail worth highlighting)

The prototype header is **transparent over the dark hero, then turns solid warm-off-white when scrolled past the hero.** This is intentional — editorial register. Reproduce exactly.

Implementation:
```tsx
'use client'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={scrolled ? 'scrolled' : ''}>...</header>
}
```

**For pages that don't have a dark hero (Living Here, About, etc.), the header should be solid from the top.** Pass a `transparentOverHero` prop, default true on homepage and Locations detail pages, default false on prose pages. This is a real bug pattern to avoid — invisible nav links on a light page.

---

## Part 11 — Mobile Responsive

Breakpoints from prototype:
- `1000px` — main layout breakpoint. Below this, nav becomes a hamburger (Claude Code: build the hamburger; prototype doesn't have one yet). Two-column grids collapse to one. Pillar grids stack.
- `600px` — small-mobile. Footer collapses to single column. Spec rows stack.

The prototype works in landscape mobile. Phone-portrait needs the hamburger menu added — design to match the editorial register, not a generic mobile drawer. Suggestion: full-screen overlay, centered nav items in serif at large size, brass accent. Justin will review this design before commit.

---

## Part 12 — Build Order

Build in this order to maintain momentum and let Justin review at each milestone:

1. **Project setup** — Next.js init, Tailwind, fonts, design tokens in globals.css, basic Header/Footer components. Verify the home route renders the brand wordmark and footer.
2. **Homepage** — full reproduction of `scholars_row_prototype_v3-1.html` as React components. Pixel-match. Justin reviews.
3. **Living Here page** — the deep resident page. New work. Justin reviews carefully — this page hasn't been visually prototyped.
4. **Locations index + Santa Clara detail** — set the template, then the other 3 are mechanical.
5. **About page + 3 insights articles**
6. **Team + Partners + Contact**
7. **Polish pass** — accessibility audit, performance audit, mobile menu, SEO/metadata sweep.
8. **Deploy preview to Vercel** — Justin reviews live.
9. **Domain migration plan** — swap scholarsrowgroup.com from Webflow to Vercel only after Justin signs off on the live preview.

Estimated cost: 8–15 hours of Claude Code time spread across the milestones, plus Justin's review cycles.

---

## Part 13 — How to Start (the prompt to feed Claude Code)

```
You are building the production website for Scholar's Row, a boutique academic
housing developer. Read /spec/scholars-row-build-spec.md in full before writing
any code. The visual source of truth is /spec/scholars_row_prototype_v3-1.html —
study it carefully.

Build in the order specified in Part 12 of the spec. Stop after each milestone
and summarize what you built so I can review.

Start with milestone 1 — project setup. Use:
- Next.js 15 with App Router and TypeScript
- Tailwind CSS v4
- next/font for the three Google Fonts (Fraunces, Inter Tight, JetBrains Mono)
- All design tokens as CSS variables in app/globals.css, exactly matching Part 4

When ready, render a minimal version of the homepage with the header, hero
(without the geometry SVG yet), and footer wired up. We'll layer in the
remaining sections in milestone 2.

Do not improvise on copy or design — both are locked. Where the spec is silent,
ask me before deciding.
```

---

## Part 14 — Open Questions for Justin to Answer Before Production Launch

These don't block Claude Code starting. They block production launch.

1. **Email aliases** — `waitlist@`, `partnerships@`, `investors@` need to exist at scholarsrowgroup.com. Or reroute mailto targets.
2. **Three founder bios + headshots** — Team page placeholders until these exist.
3. **Real concept renderings** — for Santa Clara especially. Until then, SVG geometry stands in.
4. **Three insights articles** — Claude Code will write plausible drafts. You should rewrite to match your voice and ensure factual accuracy (especially the market-thesis numbers).
5. **Press / logo wall content** — slot exists, content TBD.
6. **Privacy policy and Terms** — footer links to them. Need actual policy documents drafted.
7. **Domain migration** — when ready, swap nameservers from Webflow to Vercel. Preserve Google Workspace MX records (you've done this before for beaconhillinteriors.com).
8. **Analytics decision** — Vercel Analytics on by default. Plausible optional. No GA4.

---

## Closing note for Claude Code

The single most important thing about this project is **restraint.** Scholar's Row's design language is editorial, quiet, and deliberate. When in doubt, do less. Smaller type. More white space. Fewer animations. The prototype shows the bar — meet it, don't drift past it.

The single most important thing about the copy is **honesty.** Scholar's Row is pre-operational. Every word of public-facing copy must be true today, not aspirationally. No fake testimonials. No fictional metrics. Concept renderings are labeled.

If you're tempted to add something the spec doesn't ask for — a hero video, a stat counter, an animated counter, a parallax effect, a chatbot — don't. The aesthetic depends on what's left out as much as what's included.

Ask Justin before any deviation.
