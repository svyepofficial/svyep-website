# Handoff — SVYEP website (svyep.com)

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

> **Pushing to `main` auto-deploys to the live site (Vercel).** Small edits: commit + push to `main` when done.
> Large work (like the 2026-11 overhaul) goes on a branch; every push there gets a Vercel **preview** URL, and
> `main` is merged only with the user's explicit yes. Always tell the user what you pushed and whether it is the
> PREVIEW or LIVE.
>
> **The live site is https://svyep.com, NOT svyep.org.** `svyep.org` is a different organisation's site
> ("Silicon Valley Young Entrepreneurs and Professionals") on Apache — nothing to do with this repo. Older
> notes in this file that say svyep.org are wrong; verify deploys against **svyep.com**.

Last updated: 2026-11-27.

## What this is

Public marketing/info site for SVYEP (Silicon Valley Youth Entrepreneurship Program). Pages: Home, About, Articles,
Events, Impact, Donate, Join, Partner. Content is **data-driven** — most page content lives in plain TS data files,
not hardcoded in components, so copy/roster/stats edits happen in `src/lib/data/*.ts`.

## Stack

- **SvelteKit 2** (Svelte 5 runes) + **Vite 7** + **TypeScript**; **Tailwind CSS v4** + `@tailwindcss/typography`
- **mdsvex** for articles. Runtime dependencies are only **`globe.gl`** (the /impact globe) and
  **`phosphor-svelte`** (icons). `motion`, Lottie, `tailwind-variants`, `tailwind-merge` and `clsx` were removed in
  the 2026-11 overhaul. Conditional classes use Svelte's native `class={[...]}`.
- `@sveltejs/adapter-auto` (Vercel). **Every page is prerendered** (root `+layout.ts`) except `/articles`, which
  reads query params and a date-relative archive. `kit.prerender.origin` is `https://www.svyep.com`.
- Package manager: **npm** (`package-lock.json` is the lockfile; `bun.lock` was deleted in the overhaul because
  bun isn't installed here and Vercel must see exactly one lockfile). Never commit a `bun.lock` again.
- Design system: tokens and the shared `.btn` / `.btn-primary` / `.btn-secondary` / `.btn-lg` / `.card` / `.link`
  classes live in `src/app.css`. Conventions are in the repo's `CLAUDE.md`.

### Prettier (fixed 2026-08-21 — was broken for months)

`npx prettier` used to die on every `.svelte` file with
`TypeError: getVisitorKeys is not a function`. Cause: **`prettier-plugin-tailwindcss@0.6.14`** was
incompatible with the installed prettier / `prettier-plugin-svelte`. Fix was a three-package bump
(`prettier-plugin-tailwindcss` 0.6.14 → **0.8.1**, `prettier` 3.6.2 → **3.9.6**,
`prettier-plugin-svelte` 3.4.0 → **3.5.2**). Notes for next time:

- Bumping only `prettier-plugin-tailwindcss` swaps the crash for
  `TypeError: e.charCodeAt is not a function` — the other two must move with it.
- Reordering the `plugins` array so tailwind comes first _does_ stop the crash, but it **silently
  disables Tailwind class sorting**. Don't do that. `prettier-plugin-tailwindcss` must stay last.
- Formatting rewrote CRLF → LF on the many files originally committed with CRLF, producing whole-file
  diffs. A **`.gitattributes`** (`* text=auto eol=lf`) now pins LF so this doesn't recur. Files still
  on CRLF get converted as they're next touched — expect the odd large-but-whitespace-only diff;
  review those with `git diff --ignore-all-space`.

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

Live at https://svyep.com — DNS is managed separately; Vercel handles the build + CDN.

## Layout

- `src/routes/<page>/+page.svelte` — one folder per page. `+layout.svelte` is the shell (skip link, one static
  `StarsBackground`, Navbar, `<main>`, Footer). `+error.svelte` handles 404s.
- `src/lib/data/*.ts` — **all page content**: `site.ts` (nav links, email, Instagram — Navbar + Footer read it),
  `home.ts` (stats, member benefits shared with /join), `about.ts`, `events.ts` (also feeds /ybvc via `ybvc: true`),
  `impact.ts`, `partners.ts` (logo names/order), `young-innovators.ts`.
- `src/lib/components/` — Navbar, Footer, Logo, Seo, Marquee, StarsBackground, GlobeMarker, YouTubeEmbed.
- `src/lib/articles/NNN.md` — articles; publication dates in `src/lib/server/article-dates.ts`.
- `src/lib/logos/<group>/<slug>.png` — partner logos (imported so Vite fingerprints them), listed in `partners.ts`.
- `static/images/...` — photos. Keep new photos ≤1600px on the long side (WebP).

## Team roster (about page)

`src/lib/data/about.ts` exports `{ team, previous_members, advisors }`, each an array of
`{ name, position, description?, education?, image, imageStyle? }` (typed as `Person`). To add a member: drop
`static/images/about/<slug>.webp` and add an entry pointing `image` at `/images/about/<slug>.webp`.
`description: 'Member bio coming soon.'` is the placeholder for a blank bio.

**Image naming convention:** `firstname-lastinitial.webp` (e.g. `anthony-w.webp`, `isabella-l.webp`).
**The image filename in the data must exactly match the file on disk** — this is the most common breakage.

Members without a photo use `/images/about/placeholder.svg` (a grey silhouette) until a headshot is provided.

### Per-member photo adjustments

The template in `src/routes/about/+page.svelte` supports one optional framing field per member:

- `imageStyle` — inline style on the `<img>` inside the transparent circle (e.g. `transform: scale(2) translateY(9%)`)
  to frame cut-out headshots consistently. Circles are deliberately transparent (user decision, 2026-06-20).

**Approach: NO cropping of source files.** The team grid uses `object-contain` (no base zoom on the
`<img>` class), so every headshot is shown whole inside the circle (transparent bg blends with
`bg-zinc-950`). Do NOT crop the source images — full subjects must stay visible. Per-member framing is
done purely via the CSS `imageStyle` transform (scale to zoom, translateY to shift). The full-torso
9:16 shots need big scale values to bring the face up to size; tight 3:4 shots need little/none.

**Current per-member adjustments** (tuned interactively with the user):

- Anthony Wang: `transform: translateY(6%);`
- Ethan Hao: `transform: scale(2.2) translateY(9%);`
- Ethan Chen: `transform: scale(2.0) translateY(-2%);`
- Isabella Xia: `transform: scale(2.0);`
- Aiden Xue: `transform: scale(2.3) translateY(7%);`
- Elaine Luo: `transform: scale(1.05) translateY(10%);`
- Tyrone Tan: `transform: scale(1.95);`
- Camille Wang: none (photo frames fine with plain `object-contain`).
- Cindy Zhang: `transform: translateY(8%);`
- Eric Cheung: `transform: translateY(12%);` — source is a tight 200x200 cut-out with almost no headroom, so
  it only needs pushing down (face centre 0.35 → 0.47, matching Michael/Camille); no scale.

**Tuning workflow (useful, reused a lot):** to pick `scale`/`translateY`/`rotate` without guessing,
run a Python (Pillow + optional OpenCV Haar face-detect) script from `static/images/about/` that
simulates `object-contain` + the CSS transform inside a circular mask and writes a contact sheet;
`Read` the PNG to eyeball, then set the `imageStyle`. Face-height ~0.46–0.5 of the circle and face
center ~0.45 vertically matches the rest of the team. Scratch scripts lived in `/tmp/`.

**Grid sizing (current):** circles are **fluid** — `aspect-square w-full max-w-[22rem]`, NOT a fixed
`size-[22rem]`. Grid `max-w-[1300px] gap-x-6 gap-y-16 px-8`, card `px-3 pb-2`, bio text `text-base`.
**Gotcha (fixed 2026-08-21):** the old fixed `size-[22rem]` (352px) was _wider than its grid column_
between ~1024–1150px (column pitch there is ~328px), so adjacent circles physically overlapped, and on
375px mobile the circle spilled past its card to the viewport edges. Keep the circle fluid — if you ever
put a fixed size back, re-check 1024px and 375px.

**Team ordering rule:** in `about.ts`, members with a complete bio **and** a real photo are listed
first (original order preserved); anyone still missing a bio or photo is grouped at the end until
provided. Keep this when adding content. (Current top of the team, per the user on 2026-09-11: Isabella Liang, then **Anthony Wang**, then
**Camille Wang**, then the rest by rank.)

**Team circles are transparent** (no `bg-zinc-950` on the wrapper) — same look as the advisors /
previous-members circles. Since the photos have transparent backgrounds, whatever is behind the page
(the StarsBackground) shows through the non-subject areas. There is currently **no** full-page photo
background (an Isabella-Liang `object-fill` backdrop was tried and removed per request).

> **DEPLOY POLICY (updated user standing order, 2026-06-27):** Do not push changes until a local preview has been
> opened and the user confirms it looks fine. Push to `main` only after approval; Vercel auto-deploys that push.

## Done recently

- **Full overhaul (2026-11-27, branch `overhaul`, PREVIEW only — not merged to `main`/live yet).** Plan, audit and
  decisions in `OVERHAUL.md`. User direction: keep the dark starry theme, indigo, layouts and all content; remove the
  "vibecoded" look (glows, gradients, gimmick motion, shouting copy) and the inefficiencies. In 6 commits:
  shared design classes in `app.css`; one font `<link>` (Cinzel dropped); Navbar/Footer from `data/site.ts` with an
  accessible menu; one static star canvas instead of 2–6 animating ones per page; Lottie hero replaced by its final
  frame (`hero-globe.webp`); stats static (they rendered "0" without JS); events/YBVC one data source; partner logos
  named in `partners.ts`; Young Innovators accordions are native `<details name>`; /impact globe kept but fixed
  (local texture, unmounts, labelled markers); `/articles/<unknown>` 404s; `/api/articles` deleted; prerendering;
  images >1600px downscaled (31 → 13 MB); bun → npm; deps 8 → 2 runtime. Home first load 3.0 MB/61 requests →
  312 KB/31. svelte-check 3 errors → 0. California school count 61 → 60 (duplicate removed, user-approved).
- Older history (2026-06 → 2026-11-26: roster edits, roundtable articles, Chronicle archive, Young Innovators page,
  SEO pass, Vercel setup) is in `git log`; it was pruned from here on 2026-11-27.

## Open / not done

### From the 2026-11 overhaul

- **Merge `overhaul` → `main` needs the user's explicit yes** (that is the production deploy). Merge `main` into the
  branch first if anything landed there meanwhile (new articles need their date in `article-dates.ts`).
- **`npm audit` still reports SvelteKit advisories fixed only in SvelteKit 3** (enhanced forms, remote functions,
  query.batch, prerender cache-control). The site uses none of those features; upgrading to Kit 3 is a separate,
  deliberate migration.
- **"21 states, 17 countries" on /impact is hard-coded.** `impact.ts` has 21 US entries (incl. D.C.) but only 15
  non-US countries (16 with the US). Confirm the real figure with the user before changing it.
- **Washington, D.C. has `number_of_schools: 2` but no school names** in `impact.ts`.
- **Unreferenced images kept on purpose:** `about/teamphoto.webp`, `about/wanting-c.webp`,
  `articles/ybvc/TeamPhoto for AboutUs.webp` (possible future group photo). Delete if not wanted.
- **Default OG image is still `logo.png`.** A wide event photo would preview better when links are shared.

### Team (end-of-list "awaiting a photo" group: Derek, Leo, Lori)

- **Placeholder images + bios needed**: **Derek Meng, Leo Shi** (added 2026-08-21, no photo
  and no bio yet), and **Lori Ji** (bio added 2026-08-25, still needs a photo).
  Previous members Lotus Wu and Leana Zhou also use placeholders. Drop
  `static/images/about/<firstname-lastinitial>.webp`, point `about.ts` at it, and move the member up out of
  the end "incomplete" group if they are in `team`.
- **Advisor Rian Caesar** has no photo and no bio, and that is **intentional** — the user confirmed
  2026-08-21 that "rian doesn't want anything". He keeps the `placeholder.svg` silhouette so his card
  still lines up next to Jun Liu's. Don't chase a photo or bio for him.
- **Tyrone Tan was listed under two titles** in that same message: Director of Finance _and_ Youth Leader.
  The site shows **Director of Finance** (the higher role) until the user says otherwise.
- **Bretton Lam's title reads "Co-Founder and CEO"** (set upstream in `47d44dd`) even though he is now under
  Previous Members. It was "Co-Founder and Former CEO" before that. Left as-is, but worth confirming.
- **Maya Sharma has no education line** — she was the only previous member not in the list.
- **Eric Cheung's photo is only 200x200** (every other headshot is 400–4000px). The circle is up to 352 CSS
  px, i.e. ~700 device px on a retina screen, so his is upscaled ~3.5x and looks visibly softer than his
  neighbours'. Swap in a higher-resolution cut-out when one is available; the `translateY(12%)` framing
  should carry over if it's the same shot.
- **The Young Innovators interest form is an email fallback, not a real form.** `/join` and `/partner` embed
  Google Forms; no form exists for this program yet, so the Request section lists the 10 fields from the
  draft and ships a prefilled `mailto:` (subject + all fields as blank lines) to `svyep.official@gmail.com`.
  `src/routes/young-innovators/+page.svelte` has a commented-out `<iframe>` right above that block — drop a
  Google Form id in and delete the email card to switch over.
- **No photos on the Young Innovators page.** The draft suggested a hero shot (students collaborating) and
  an about-section photo (students in a workshop). Neither exists in `static/images/`, so the page runs on
  the StarsBackground like `/ybvc` does. Add them under `static/images/young-innovators/` when they're
  taken. (The draft also suggested a sample project-card visual, but that box has since been removed, so
  that one is moot.)
- **Two different contact emails in the draft.** The body, FAQ and CTA all say `svyep.official@gmail.com`
  (which matches the rest of the site); the draft's own footer says `info@svyep.com`. The page uses
  `svyep.official@gmail.com` throughout — change `program.email` in the data file if `info@svyep.com` is
  the real one.
- **The draft's program-specific footer was not applied.** It specifies its own footer (tagline, "Quick
  Links: About the Program | Our Lessons | For Schools | FAQs | Contact", `© SVYEP`). The site has one
  global `Footer.svelte` shared by every page; only a "Young Innovators" link was added to it. Say so if a
  per-page footer is actually wanted.
- **Big team photo** removed from About (was above Advisors) — re-add if a good group photo appears.
- **The YBVC site (ybvcompetition.org) is NOT in this repo** and is not on this machine — the
  `svyepofficial` org has only `svyep-website`. The user asked on 2026-08-28 for interview clips to be
  updated on "both the SVYEP and YBVC websites"; only the SVYEP side could be done. Whoever picks this up
  needs to be pointed at wherever that site is managed.
- **No interview clips anywhere else on the site yet** — the seven YBVC 2026 clips currently live only in
  article `026.md`. The homepage still advertises "Interviews with industry leaders" as plain text on a
  Join card (`src/routes/+page.svelte`) with nothing embedded; a clips section there is an obvious follow-up
  if more interviews get published.
