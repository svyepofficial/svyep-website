# Handoff — SVYEP website (svyep.org)

Living handoff for the SVYEP marketing site. Read this first when you pick up the project, then keep it current.

## ⚠️ Instructions for the Claude session reading this (keep this file alive)
This is the living handoff. **You must keep it current** so the next session (after a context clear) starts where you
left off:
- **Before you start**: read this whole file. Trust "Open / not done" over any stale assumption.
- **As you finish each meaningful change** (and before ending your turn / running low on context): update this file.
  Edit `Last updated`, move finished items out of "Open / not done", add new work under "Done recently", and record
  any new gotcha, command, or decision the next session would otherwise have to rediscover.
- **Be honest**: if something is half-done or unverified, say so in "Open / not done". Don't claim verification you
  didn't do.
- **Keep it tight**: this is a pointer, not a changelog. Prune stale items. Carry this section forward — never delete it.
- Use the real current date for `Last updated`.

> **Pushing to `main` auto-deploys to the live site (Vercel).** The user has approved committing and pushing — just
> do it. Commit + push to `main` is the deploy step. No separate action needed.

Last updated: 2026-06-20.

## What this is
Public marketing/info site for SVYEP (Silicon Valley Youth Entrepreneurship Program). Pages: Home, About, Articles,
Events, Impact, Donate, Join, Partner. Content is **data-driven** — most page content lives in plain TS data files,
not hardcoded in components, so copy/roster/stats edits happen in `src/lib/data/*.ts`.

## Stack
- **SvelteKit** (Svelte 5 runes) + **Vite 7** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`) + `@tailwindcss/typography`; `tailwind-variants` / `tailwind-merge` / `clsx`
- **mdsvex** (`.md` as Svelte components — used for articles), `phosphor-svelte` icons, `motion` (animations),
  `globe.gl`, `@lottiefiles/dotlottie-svelte`
- `@sveltejs/adapter-auto` (Vercel auto-detected at build)
- Package manager: **bun** (`bun.lock` is the committed lockfile). A stray untracked `package-lock.json` may appear if
  npm was run — prefer bun. Don't commit `package-lock.json`.

## Run / build / deploy

### Local dev — KNOWN ISSUE with `vite dev`
`bun run dev` / `npm run dev` has a Vite 7 SSR module-runner bug on this machine: Vite starts and reports "ready"
but every page request returns a 60-second timeout error (`transport invoke timed out`). **Use the preview workflow instead:**

```bash
# First time / after changes:
npm run build && npm run preview
# Preview serves at http://localhost:4173 and works correctly.
```

If `npm run dev` silently hangs (starts, no port, no output): there's a stale `node_modules/.vite/deps_temp_*`
folder from a prior interrupted run. Fix: `rm -rf node_modules/.vite && npm run dev --force`.

### Deploy / refresh the live site
Vercel auto-deploys on every push to `main`. If the site doesn't update after a push:
1. Check the Vercel dashboard for a failed build (build log will explain why).
2. To force a redeploy without a code change: **Vercel dashboard → project → Deployments → "..." menu → Redeploy**.
3. Or trigger via CLI (if logged into the svyep Vercel account): `vercel --prod`.

Live at https://svyep.org — DNS is managed separately; Vercel handles the build + CDN.

## Layout
- `src/routes/<page>/+page.svelte` — one folder per page (about, articles, events, impact, donate, join, partner).
  `+layout.svelte` is the shared shell. Some pages have `+page.ts` / `+page.server.ts` loaders (articles, impact).
- `src/lib/data/*.ts` — **page content** (`about.ts`, `events.ts`, `home.ts`, `impact.ts`). Edit copy/rosters/stats here.
- `src/lib/components/` — shared components (Footer, etc.). `src/lib/articles/` — article `.md` sources.
- `static/images/about/<slug>.webp` — team headshots, referenced from `about.ts` as `/images/about/<slug>.webp`.

## Team roster (about page)
`src/lib/data/about.ts` exports `{ team, previous_members, advisors }`, each an array of
`{ name, position, description, image }`. To add a member: drop `static/images/about/<slug>.webp` and add an entry
pointing `image` at `/images/about/<slug>.webp`. `description: 'Member bio coming soon.'` is the placeholder for a
blank bio.

**Image naming convention:** `firstname-lastinitial.webp` (e.g. `anthony-w.webp`, `isabella-l.webp`).
**The image filename in the data must exactly match the file on disk** — this is the most common breakage.

Members without a photo currently use `/images/about/placeholder.svg` (a grey silhouette) until a real headshot
is provided.

## Done recently
- **About page overhaul (2026-06-20)**: added bios for Aiden Xue, Isabella Liang, Anthony Wang; renamed all headshot
  files to `firstname-lastinitial` convention; fixed all `about.ts` image paths to match; added `placeholder.svg`
  for the 6 members still without photos; added Previous Members section to `+page.svelte`; updated README; removed
  designer credit from Footer. Committed and pushed (`b33063e`).
- **Anthony Wang headshot updated (2026-06-20)**: new photo committed and pushed.

## Open / not done
- **Vercel deployment not reflecting latest push** — the push landed on GitHub (`b33063e` on origin/main) but svyep.org
  hasn't updated as of 2026-06-20. Check Vercel dashboard for a failed build or trigger a manual redeploy.
- **6 members still have placeholder images** (no real photo provided yet): Elaine Luo, Jack Li, Michael Huang,
  Cindy Zhang, Lotus Wu, Leana Zhou. Drop `static/images/about/<firstname-lastinitial>.webp` and update `about.ts`.
- **Position titles**: all current team members show "Position Title" — real titles not yet provided.
- **Bios missing** for: Camille Wang, Tyrone Tan, Jack Li, Michael Huang, Isabella Xia, Cindy Zhang, Elaine Luo.
