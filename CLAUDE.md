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

## Design (the original look is the spec)

The user tried a "deslopped" redesign in 2026-11 (fonts re-weighted, sizes shrunk, glows and animation removed) and
rejected each step: the original look, with its animations, is what they want. Don't restyle, shrink, or remove
motion/glows to "clean it up". Match the surrounding page when adding things.

- Dark zinc-950 page, animated `StarsBackground`, indigo accent, glow text-shadows (`text-shadow-glow-*` in
  `app.css`), `Spotlight` beams, the Lottie hero (`static/animation.json`), `AnimateNumber` count-ups,
  `AnimateText` word fade-ins, `motion` scroll animations.
- Fonts: Urbanist (UI, `tracking-tighter` headings), Baskervville (serif accents), GFS Didot (wordmark),
  Cinzel Decorative (Chronicle masthead, `font-articles`).
- Buttons: `Button.svelte` (tailwind-variants). Images get `alt` and `width`/`height` where you add them.

## Code conventions

- Content lives in `src/lib/data/*.ts`. Partner logos are globbed from `src/lib/logos/<group>/NN name.png`
  (the number sets the order).
- Conditional classes: `cn()` from `src/lib/utils/cn.ts` (clsx + tailwind-merge), as the existing code does.
- Every route is prerendered except `/articles`. A new dynamic route needs `entries` or `prerender = false`.
- New articles: add `src/lib/articles/NNN.md` and its date in `src/lib/server/article-dates.ts` (the build throws if
  missing). Prettier ignores articles on purpose: formatting them breaks mdsvex.
- Photos: WebP, ≤1600px long side (`cwebp -q 82 -resize 1600 0 in -o out.webp`).
