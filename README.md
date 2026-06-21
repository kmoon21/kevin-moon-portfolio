# Kevin Moon — Portfolio

Next.js (App Router) + TypeScript + Tailwind v4 port of the portfolio mockup.
Same design system, but data-driven and ready to deploy on Vercel alongside
your other projects.

## Structure

```
app/
  layout.tsx       — fonts (next/font), metadata, root HTML shell
  page.tsx          — composes the page from section components
  globals.css       — Tailwind v4 theme tokens (colors, fonts) + custom animations
components/
  Nav.tsx
  Hero.tsx          — headline, typewriter line, status console
  TypewriterLine.tsx — client component for the typed thesis line
  Reveal.tsx         — client component, scroll-in fade for any section
  About.tsx
  Projects.tsx       — renders ProjectCard for each entry in lib/projects.ts
  ProjectCard.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
lib/
  projects.ts        — all project copy + metrics live here. Add a project
                        by adding one object to the `projects` array.
public/
  resume.pdf          — ADD THIS: drop your resume PDF here, matches the
                        /resume.pdf links already wired into Hero and Contact
```

## Before you deploy

1. **Add `public/resume.pdf`** — the download buttons already point to
   `/resume.pdf`, it just doesn't exist yet.
2. **Add GitHub repo links** to `lib/projects.ts` if you want them on the
   cards (left out since you hadn't decided which repos to make public).
3. Optional: add an OG image. `app/layout.tsx` already has the `openGraph`
   metadata block ready, it just needs an `images` entry once you have one.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy

Push to a GitHub repo, then import it in Vercel (same flow as your other
projects). Point the custom domain `kevinmoon.dev` at the Vercel deployment
the same way you've done for sandlotsharp.com / dotapulse.gg.

## Notes on the port from the static mockup

- Tailwind v4 uses CSS-first config — the design tokens (`--color-bg`,
  `--font-display`, etc.) live in `app/globals.css` under `@theme` instead of
  a `tailwind.config.ts` file. To change the palette or fonts, edit there.
- Fonts are loaded via `next/font/google` in `app/layout.tsx` instead of a
  Google Fonts `<link>` tag — this self-hosts them and avoids layout shift,
  which is the correct approach in Next.js (the static HTML mockup used a
  CDN link since it had no build step).
- The typewriter effect and scroll-reveal are both client components
  (`TypewriterLine.tsx`, `Reveal.tsx`) — everything else stays a server
  component by default, which is the right default in the App Router.
