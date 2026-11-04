# Scholar's Row

Marketing site for a boutique academic housing developer building residences for graduate students, medical residents, and visiting faculty near serious research universities. The company is pre-operational — the first community opens in Santa Clara in 2027.

**Live site:** scholarsrowgroup.com (in development)

## What it is

Scholar's Row positions itself against the standard apartment complex by targeting a specific audience (the serious graduate student, broadly defined) and committing to quiet, walkable, health-forward design. The site reflects that: institutional register, no rental-brochure cadence, honest about being pre-operational.

Four announced markets: Santa Clara (flagship), Berkeley, Worcester, Evanston.

## Stack

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS v4** + custom CSS variables for design tokens
- **Content system** — locations and articles as markdown files in `/content/`, parsed at build time
- **CSS-only animations** — `.reveal` IntersectionObserver pattern, no animation library

No state management library, no UI component library — components are bespoke and match the design system exactly.

## Project structure

```
scholars-row/
  app/                    Next.js App Router pages
    page.tsx              Homepage
    living-here/          "Living Here" page
  components/             Bespoke section components
    Hero.tsx
    DayAtScholarsRow.tsx
    TheResidence.tsx
    TheStandard.tsx
    HomepageLocations.tsx
    QuietByDesign.tsx     Acoustic design section
    AcousticSchematic.tsx SVG schematic — acoustic isolation diagram
    AirQualitySchematic.tsx
    FloorPlanSchematic.tsx
    WalkDiagram.tsx       Walkability diagram
    RevealOnScroll.tsx    IntersectionObserver scroll animation wrapper
    ...
  content/
    locations/            One .md file per market (Berkeley, Evanston, Santa Clara, Worcester)
  lib/
    content.ts            Location content parser
    types.ts
  spec/                   Build spec and wireframes (design source of truth)
```

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

The schematics (`AcousticSchematic`, `AirQualitySchematic`, `FloorPlanSchematic`, `WalkDiagram`) are custom SVG components built to match the design spec — not library icons. The acoustic and air quality schematics diagram the building's physical standard; the walk diagram illustrates walkability to each market's university anchor.

Fonts: Fraunces (display), Inter Tight (UI), JetBrains Mono (data/detail) — loaded via `next/font/google`.
