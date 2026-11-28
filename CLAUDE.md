# CLAUDE.md — svyep.com

Read `handoff.md` first (current state, open items) and keep it current. `OVERHAUL.md` records the 2026-11 audit and
the decisions behind the current architecture.

## Commands

- `npm run build && npm run preview` → http://localhost:4173 (`vite dev` can hang on this machine; see handoff).
- Before committing: `npm run check` (0 errors expected), `npx prettier --check .`, `npm run build`. Gate commits on a
  passing build; don't chain `git commit` after a command whose failure you'd miss.
- npm only. Never add a `bun.lock`; Vercel must see exactly one lockfile.

## Deploying

Pushing `main` deploys svyep.com. Big changes go on a branch (Vercel preview URL) and merge only with the user's yes.
Always say what was pushed and whether it is PREVIEW or LIVE. Verify live with `curl -sL https://svyep.com/<path>`.

## Design system (keep the existing identity)

Dark zinc-950 page with one static star field, indigo accent. Fonts are the originals and the user prefers them —
don't swap or re-weight them: Urbanist (UI, tight `tracking-tighter` headings, black stat numbers, light/extralight
body on About/Events/Young Innovators), Baskervville (serif accents, names), GFS Didot (wordmark), Cinzel Decorative
(Chronicle masthead, `font-articles`). The user wants this look kept and _deslopped_, not rebranded.

- Use the classes in `src/app.css`: `btn btn-primary|btn-secondary [btn-lg]`, `card`, `link`. Don't hand-roll buttons.
- Text roles: `zinc-100` primary, `zinc-300`/`zinc-400` secondary. Small indigo text is `indigo-400`
  (`indigo-600` fails contrast on zinc-950); large serif accents use `indigo-500`.
- One serif-italic indigo accent word per headline at most; none in body copy.
- Sentence case for headings, buttons and labels; no uppercase labels, no trailing periods on headings.
- No glows, text-shadows, gradients, `transition-all`, scroll-driven or looping decorative motion.
  Hover = color change; `prefers-reduced-motion` is honoured globally.
- One `<h1>` per page; images get `alt` (empty if decorative), `width`/`height`, and `loading="lazy"` below the fold.

## Code conventions

- Content lives in `src/lib/data/*.ts` (typed). Nav links and contacts: `data/site.ts`. Events feed both /events
  and /ybvc. Partner logos are listed explicitly in `data/partners.ts`.
- Conditional classes: Svelte `class={[...]}` (no clsx / tailwind-merge).
- Every route is prerendered except `/articles`. A new dynamic route needs `entries` or `prerender = false`.
- New articles: add `src/lib/articles/NNN.md` and its date in `src/lib/server/article-dates.ts` (the build throws if
  missing). Prettier ignores articles on purpose: formatting them breaks mdsvex.
- Photos: WebP, ≤1600px long side (`cwebp -q 82 -resize 1600 0 in -o out.webp`).
