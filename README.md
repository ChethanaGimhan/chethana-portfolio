# Portfolio

My personal portfolio site — projects, tech stack, and a bit about me.

**Live:** [chethanagimhan.cse23.org](https://chethanagimhan.cse23.org)

## Built with

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Deployed on **Vercel**

## Features

- Single-page layout with hero, about, tech stack, projects, and contact sections
- Individual case-study pages for each project (challenge / approach / outcome), statically generated from a single data file
- Light and dark themes with a manual toggle, saved to `localStorage` and applied before first paint so there's no flash
- Scroll-triggered reveal animations that respect `prefers-reduced-motion`
- Responsive down to 320px

## Structure

```text
app/
├── layout.tsx              # root layout, nav, theme init
├── page.tsx                # homepage — composes the sections
├── globals.css             # theme tokens, animations
├── components/             # Hero, About, Skills, Projects, Contact, Nav, ThemeToggle, Reveal
├── lib/projects.ts         # project data (single source for cards + detail pages)
└── projects/[slug]/        # generated project detail pages
```

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Adding a project

Add an entry to `app/lib/projects.ts` — the card on the homepage and its detail page at `/projects/<slug>` are both generated from it.
