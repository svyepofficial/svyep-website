# SVYEP — Silicon Valley Youth Entrepreneurship Program

The official website for the **Silicon Valley Youth Entrepreneurship Program (SVYEP)**, a student-run nonprofit
connecting high school students with entrepreneurship resources, networking events, internships, and industry
professionals across Silicon Valley and beyond.

**Live site:** [svyep.com](https://svyep.com)

## About SVYEP

- **Connections** — in-person speaker events, networking sessions, and Zoom webinars with industry leaders
- **Experience** — paid internships, volunteer opportunities at Silicon Valley startups, and hands-on work with
  professionals
- **Education** — student-led workshops, the Young Innovators classroom program, and a nationwide network of schools

The current figures shown on the site live in `src/lib/data/home.ts`.

## Tech stack

- [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5) with TypeScript, prerendered and deployed on
  [Vercel](https://vercel.com/)
- [Tailwind CSS v4](https://tailwindcss.com/) — design tokens and shared classes in `src/app.css`
- [mdsvex](https://mdsvex.pngwn.io/) for articles, [globe.gl](https://globe.gl/) for the impact globe,
  [Phosphor](https://phosphoricons.com/) icons

## Getting started

Requires Node.js 20.19+ and npm.

```bash
npm install
npm run build && npm run preview   # http://localhost:4173
```

`npm run dev` also works on most machines (see `handoff.md` if it hangs). Before committing:

```bash
npm run check && npx prettier --check . && npm run build
```

## Project structure

```
src/
├── app.css              # Design tokens and shared .btn / .card / .link classes
├── lib/
│   ├── articles/        # Chronicle articles (Markdown + Svelte)
│   ├── components/      # Navbar, Footer, Seo, Marquee, …
│   ├── data/            # All page content: site links, home stats, team, events, partners, impact
│   ├── logos/           # Partner logos (listed in data/partners.ts)
│   └── server/          # Chronicle listing and article dates
└── routes/              # One folder per page
static/images/           # Photos (WebP, ≤1600px)
```

## Deployment

Vercel builds every push. Pushes to `main` deploy to svyep.com; other branches get a preview URL.
