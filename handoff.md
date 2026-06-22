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

Last updated: 2026-06-20 (evening).

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
`{ name, position, description, image, imageStyle?, wrapperStyle? }`. To add a member: drop
`static/images/about/<slug>.webp` and add an entry pointing `image` at `/images/about/<slug>.webp`.
`description: 'Member bio coming soon.'` is the placeholder for a blank bio.

**Image naming convention:** `firstname-lastinitial.webp` (e.g. `anthony-w.webp`, `isabella-l.webp`).
**The image filename in the data must exactly match the file on disk** — this is the most common breakage.

Members without a photo use `/images/about/placeholder.svg` (a grey silhouette) until a headshot is provided.

### Per-member photo adjustments
The template in `src/routes/about/+page.svelte` supports two optional fields per member:
- `imageStyle` — inline style on the `<img>` (e.g. `transform: scale(1.25)` to zoom in, `object-fit: contain` to
  prevent cropping). Overrides the default `object-cover` class.
- `wrapperStyle` — inline style on the circle wrapper `<div>`. Use `background: #09090b` when scaling down so the
  gap between the image and circle edge is invisible (matches page background).

**Approach: NO cropping of source files.** The team grid uses `object-contain` (no base zoom on the
`<img>` class), so every headshot is shown whole inside the circle (transparent bg blends with
`bg-zinc-950`). Do NOT crop the source images — full subjects must stay visible. Per-member framing is
done purely via the CSS `imageStyle` transform (scale to zoom, translateY to shift). The full-torso
9:16 shots need big scale values to bring the face up to size; tight 3:4 shots need little/none.

**Current per-member adjustments** (tuned interactively with the user):
- Anthony Wang: `transform: translateY(6%);`
- Ethan Hao: `transform: scale(2.2) translateY(9%);`
- Tyrone Tan: `transform: scale(1.95);`
- Ethan Chen: `transform: scale(2.0) translateY(-2%);`
- Isabella Xia: `transform: scale(2.0);`
- Aiden Xue: `transform: scale(2.3) translateY(7%);`

**Team ordering rule:** in `about.ts`, members with a complete bio **and** a real photo are listed
first (original order preserved); anyone still missing a bio or photo is grouped at the end until
provided. Keep this when adding content.

**Team circles are transparent** (no `bg-zinc-950` on the wrapper) — same look as the advisors /
previous-members circles. Since the photos have transparent backgrounds, whatever is behind the page
(the StarsBackground) shows through the non-subject areas. There is currently **no** full-page photo
background (an Isabella-Liang `object-fill` backdrop was tried and removed per request).

> **DEPLOY POLICY (user standing order, 2026-06-20):** ALWAYS auto-deploy whenever changes are made —
> i.e. after any change, commit + push to `main` (which auto-deploys to Vercel) without waiting to be
> asked. Don't commit the stray `package-lock.json` (bun-only project).

## Done recently
- **Website feedback pass (2026-06-22)**: (1) Stats fixed in `home.ts` — `raised` 305k→**120k**
  (true value, headline+body share the var so they match); `impacted_students` (215k) **reframed** on
  the homepage as "students & attendees reached" with copy explaining it counts event/pitch reach,
  not members. (2) Homepage: added a "What you get as a member" section near the top (the 3 Join cards
  — AI internships / leader interviews / event invites) + early student CTA; hero subhead added;
  three-pillars intro + About vision rewritten to thread the **social-impact mission**; closing CTA
  split into "Join as a student" vs secondary Partner/Donate. (3) Team: reordered (complete profiles
  first), added Cindy Zhang's bio, removed advisor Wanting Chen, dropped Bretton Lam's "Co-Founder and
  CEO" title. (4) Join form subhead readability bump. Commits `4b42259`, `8e13507`.
- **About page polish + deploy (2026-06-20, latest)**: made team circles transparent (removed
  `bg-zinc-950` wrapper, matches advisors/previous); removed the `bg-zinc-950` highlight behind
  "Our Vision" + its description; removed the Isabella-Liang full-page background that was briefly
  added. Per-member `imageStyle` transforms tuned interactively (see "Current per-member
  adjustments"); grid spacing settled at `max-w-[1200px] gap-8` card `px-4`. Earlier: added Isabella
  Xia's bio; removed the large `teamphoto.webp` block above Advisors.
- **(superseded) Team grid no-crop layout (2026-06-20)**: reverted the earlier square-crop experiment
  to original uncropped photos. Removed the large `teamphoto.webp` block above
  Advisors; added Isabella Xia's bio. Source webp files were restored from git (originals untouched).
  Build verified.
- **About page overhaul (2026-06-20)**: added bios for Aiden Xue, Isabella Liang, Anthony Wang; renamed all headshot
  files to `firstname-lastinitial` convention; fixed all `about.ts` image paths; added `placeholder.svg` for 6 members
  without photos; added Previous Members section; updated README; removed designer credit from Footer (`b33063e`).
- **Anthony Wang headshot updated + photo adjustments (2026-06-20)**: new photo committed. Added `imageStyle` /
  `wrapperStyle` support to the about template. Ethan Hao and Aiden Xue zoomed in (scale 1.25); Anthony Wang zoomed
  out with contain + translateY to prevent cropping (`5cda1bf`).
- **Vercel deployment fixed (2026-06-20)**: repo was private (blocking Hobby plan deploys) — made public. Vercel
  Authentication ("Require Log In") was enabled — disabled it. Auto-deploy on push to `main` now works.

## Open / not done
### Team
- **Placeholder images** (no real photo yet): Michael Huang, Lotus Wu, Leana Zhou. Drop
  `static/images/about/<firstname-lastinitial>.webp` and update `about.ts` (then move them up out of
  the end-of-list "incomplete" group). (Cindy/Elaine/Jack photos added 2026-06-22.)
- **Bios missing** for: Camille Wang, Tyrone Tan, Michael Huang. (Cindy/Elaine/Jack now have bios.)
- **Position titles**: all current team show a dash (`-`) — real titles not yet provided.
- **Big team photo** removed from About (was above Advisors) — re-add if a good group photo appears.

### Website-feedback items still BLOCKED on user-provided content (2026-06-22)
- **"How it works" basics** — homepage says "community for high school students" but does NOT yet
  state: is membership **free**? **eligibility** (anywhere / Bay Area only / grade levels)? **time
  commitment**? Need these facts to add a proper short "How it works" line. (I avoided asserting
  "free" without confirmation.)
- **Trust signals (not started, need assets):**
  - Org / nonprofit details: legal name, 501(c)(3) status, EIN — for the footer/about/donate.
  - A real **contact** beyond the Gmail address (official email and/or mailing address).
  - **Partner logos** — site name-drops Google Fiber + investors but shows no logos. Need logo image
    files to build a partners strip (good fit for the homepage `businesses worked with` section).
  - **Student testimonials** — 2–3 quotes + names/schools to add a testimonial section.
- **UX (partially done):** added an early CTA + value section near the top; homepage is still long and
  animation-heavy below the fold — could trim further if desired (subjective, left for direction).
