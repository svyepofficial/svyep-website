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

> **Pushing to `main` auto-deploys to the live site (Vercel).** Current user rule: do not push changes until a local
> preview has been opened and the user confirms it looks fine. Commit + push to `main` is the deploy step after that
> approval. Don't commit the stray `package-lock.json` (bun-only project).
>
> **The live site is https://svyep.com, NOT svyep.org.** `svyep.org` is a different organisation's site
> ("Silicon Valley Young Entrepreneurs and Professionals") on Apache — nothing to do with this repo. Older
> notes in this file that say svyep.org are wrong; verify deploys against **svyep.com**.

Last updated: 2026-08-21.

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
- **bun is NOT installed on this machine.** `npm` works for running scripts, but it will not update
  `bun.lock`. If you must change a dependency, grab a throwaway bun binary rather than installing it
  system-wide:
  `curl -fsSL -o bun.zip https://github.com/oven-sh/bun/releases/latest/download/bun-darwin-aarch64.zip`
  (unzip it in a temp dir, then run `<dir>/bun-darwin-aarch64/bun add ...` with cwd set to the project).
  Afterwards **always** confirm with `bun install --frozen-lockfile` — Vercel installs from `bun.lock`,
  so a lockfile out of sync with `package.json` can fail the production build.

### Prettier (fixed 2026-08-21 — was broken for months)

`npx prettier` used to die on every `.svelte` file with
`TypeError: getVisitorKeys is not a function`. Cause: **`prettier-plugin-tailwindcss@0.6.14`** was
incompatible with the installed prettier / `prettier-plugin-svelte`. Fix was a three-package bump
(`prettier-plugin-tailwindcss` 0.6.14 → **0.8.1**, `prettier` 3.6.2 → **3.9.6**,
`prettier-plugin-svelte` 3.4.0 → **3.5.2**). Notes for next time:
- Bumping only `prettier-plugin-tailwindcss` swaps the crash for
  `TypeError: e.charCodeAt is not a function` — the other two must move with it.
- Reordering the `plugins` array so tailwind comes first *does* stop the crash, but it **silently
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
- Ethan Chen: `transform: scale(2.0) translateY(-2%);`
- Isabella Xia: `transform: scale(2.0);`
- Aiden Xue: `transform: scale(2.3) translateY(7%);`
- Elaine Luo: `transform: scale(1.05) translateY(10%);`
- Jack Li: `transform: scale(1.7) translateY(18%);`
- Tyrone Tan: `transform: scale(1.95);`
- Camille Wang: none (photo frames fine with plain `object-contain`).
- Cindy Zhang: photo currently removed (placeholder). Her `cindy-z.webp` is still in the repo; when
  re-enabled it needed `transform: scale(2.7) rotate(-18deg) translateY(11%);` (source photo is slanted,
  hence the CCW rotate). `rotate()` works inside the transform — good tool for tilted source photos.

**Tuning workflow (useful, reused a lot):** to pick `scale`/`translateY`/`rotate` without guessing,
run a Python (Pillow + optional OpenCV Haar face-detect) script from `static/images/about/` that
simulates `object-contain` + the CSS transform inside a circular mask and writes a contact sheet;
`Read` the PNG to eyeball, then set the `imageStyle`. Face-height ~0.46–0.5 of the circle and face
center ~0.45 vertically matches the rest of the team. Scratch scripts lived in `/tmp/`.

**Grid sizing (current):** circles are **fluid** — `aspect-square w-full max-w-[22rem]`, NOT a fixed
`size-[22rem]`. Grid `max-w-[1300px] gap-x-6 gap-y-16 px-8`, card `px-3 pb-2`, bio text `text-base`.
**Gotcha (fixed 2026-08-21):** the old fixed `size-[22rem]` (352px) was *wider than its grid column*
between ~1024–1150px (column pitch there is ~328px), so adjacent circles physically overlapped, and on
375px mobile the circle spilled past its card to the viewport edges. Keep the circle fluid — if you ever
put a fixed size back, re-check 1024px and 375px.

**Team ordering rule:** in `about.ts`, members with a complete bio **and** a real photo are listed
first (original order preserved); anyone still missing a bio or photo is grouped at the end until
provided. Keep this when adding content. (Exception the user requested: **Camille Wang** is pinned to
her original spot right after Isabella Liang even while her content was being filled in.)

**Team circles are transparent** (no `bg-zinc-950` on the wrapper) — same look as the advisors /
previous-members circles. Since the photos have transparent backgrounds, whatever is behind the page
(the StarsBackground) shows through the non-subject areas. There is currently **no** full-page photo
background (an Isabella-Liang `object-fill` backdrop was tried and removed per request).

> **DEPLOY POLICY (updated user standing order, 2026-06-27):** Do not push changes until a local preview has been
> opened and the user confirms it looks fine. Push to `main` only after approval; Vercel auto-deploys that push.

## Done recently
- **SEO pass, prettier fix, roster/name corrections (2026-08-21, later same day)**:
  **New `src/lib/components/Seo.svelte`** — renders title, `meta description`, canonical, and
  OG/Twitter card tags; takes `title` (the " • SVYEP" suffix is added inside), `description`, optional
  `image` (root-relative; converted to absolute, since crawlers reject relative OG images) and
  `type`. **Every** route now uses it, including `articles/[slug]`, which previously had no
  `<svelte:head>` at all so article tabs showed the raw URL. Article pages feed it `metadata.title` /
  `metadata.subtitle` / `metadata.images[0]`.
  **`/impact` now server-renders**: `+page.server.ts` had `export const ssr = false`, so crawlers got a
  ~1KB empty shell. globe.gl is already lazily imported inside `onMount`, so it never touches the
  server — flipping to `ssr = true` gives a ~14KB SSR page and the globe still mounts fine (verified
  visually in preview).
  **Prettier is fixed** — see the Prettier section below.
  **Events page** now shows `2025.webp` for YBVC 2025 instead of the Drive iframe, matching /ybvc.
  **Footer** gained the missing `/ybvc` link. **Michael Huang → Michael Hung** (user confirmed the
  correct spelling); `michael-h.webp` is unchanged since the convention is firstname-lastinitial.
  Jack Li stays on the team (user confirmed).
- **About spacing fix + roster update, YBVC page rework (2026-08-21)**: **About** — the "too close /
  overlapping" report was two separate things: (a) every section heading sat flush against its own
  body copy and against the next section (`gap-6` at the page root, no `mb` on any heading), and
  (b) the fixed-size team circles genuinely overlapped at ~1024–1150px (see the Grid sizing gotcha
  above). Fixed both: root `gap-16 pt-40 sm:gap-24 sm:pt-44`, `mb-4 sm:mb-6` on Vision/Mission
  headings, `mb-12` on Advisors/Previous Members, `leading-[1.15] pb-2` on the big serif headings so
  descenders stop clipping, grid `mt-12 gap-y-16`, and fluid circles. Advisors also switched from a
  4-col grid to centred flex-wrap — with only 2 advisors left the grid pinned them to the left half.
  **Roster** — Bretton Lam + Jeremy Peng moved from `advisors` to `previous_members` (advisors is now
  just Rian Caesar + Jun Liu); added Derek Meng, Arun Banerjee, Leo Shi, Jaden Zhao, Lori Ji to `team`
  (placeholder photo + "Member bio coming soon.", in the end group per the ordering rule). Team is now
  17. **YBVC page** (`src/routes/ybvc/+page.svelte`) — removed the "YBVC" `<h1>`, reordered so 2025 is
  the left card and 2026 the right, swapped 2025's Google-Drive iframe for
  `/images/articles/ybvc/2025.webp`, rewrote 2025's blurb to past tense, and added a
  `ybvcompetition.org` link under the cards. Verified in `npm run preview` at 375/1024/1150/1280px:
  no horizontal overflow, no circle overlap, all pages 200, no broken images.

- **Partner logo wall experiment (2026-08-21, local pending review)**: pulled latest `main` (already up to date),
  confirmed 44 existing company/organization logos, then locally replaced the moving Partner page marquee with a
  static logo wall for preview. Added five screenshot-derived, transparent, theme-colored logos:
  MagStone Law, Star One Credit Union, 7EDU, Stan's Donuts, and Philz Coffee. User then asked to restore original
  logo colors, so the five screenshot-derived logos were regenerated in original colors and the Partner logo wall was
  changed to full-color logos on light tiles instead of grayscale/opacity styling. User then reverted that direction:
  the five screenshot-derived logos are back to themed white/indigo treatment and render slightly larger than the
  other company logos. User then asked to make logos gray-ish again, so the Partner page now applies grayscale /
  softened contrast / opacity styling to the logo displays. No commit/push until local preview is approved.
- **YBVC page split (2026-08-21, local pending review)**: locally added a top-nav `YBVC` tab, moved the Youth Business
  Venture Competition card out of Events into a new `/ybvc` page, and converted
  `/Users/angelahe/Downloads/SVYEP-YBVC report.pdf` into a new article at `src/lib/articles/026.md` titled
  `Youth Business Venture Competition 2026`, with extracted photos under `static/images/articles/ybvc-2026/`.
  The `/ybvc` page now shows the 2026 and 2025 YBVC entries as matching compact cards in one desktop row, with
  2026 on the left and 2025 on the right; the 2025 title is `Youth Business Venture Challenge 2025`, and the 2026 card links to `/articles/026` with a
  `Read More` button instead of linking to a PDF. No commit/push until local preview is approved.
- **Events layout update (2026-08-21, local pending review)**: locally moved the two former `past_events` entries into
  `featured_events`, replaced the featured card grid with alternating text/image rows matching the existing past-event
  format, and added both YBVC entries back into the Events page as featured events while keeping the separate `/ybvc`
  tab. No commit/push until local preview is approved.
- **Advisor copy/layout cleanup (2026-08-06)**: removed Bretton Lam's advisor description,
  added Rian Caesar as `Advisor` using `/images/about/placeholder.svg`, made advisor image/description rendering
  conditional in `src/routes/about/+page.svelte`, and changed Advisors to a four-column desktop grid so all four
  advisors sit on one row. Local preview was approved before push per current user rule.
- **Michael Huang headshot + Bretton bio (2026-08-08)**: created
  `static/images/about/michael-h.webp` from `/Users/angelahe/Downloads/IMG_0168.heic`, removed the wall background,
  pointed Michael's team entry at the new image with `transform: scale(1.10) translateY(-5%);`, moved him out of
  the end placeholder group, and added Bretton Lam's advisor description. Local preview was approved before push per
  current user rule.
- **Bretton Lam advisor move (2026-08-05)**: moved Bretton from `previous_members` to `advisors` in
  `src/lib/data/about.ts` and changed his role to `Co-Founder and Former CEO`. Local preview was approved before
  push per current user rule.
- **About page hero compaction (2026-06-27)**: reduced the Vision/Mission headings and body copy, tightened
  vertical gaps, and lowered the "Meet the Team" heading size so part of the first team-photo row is visible
  above the fold in the local preview. Added a small top-padding bump after review so "Our Vision" has more
  breathing room below the navbar. Verified with `npm run build` and `npm run preview` at
  `http://127.0.0.1:4173/about`; build still shows the pre-existing article-route Svelte warning.
- **Michael Huang bio added (2026-06-27)**: replaced his placeholder bio in `src/lib/data/about.ts`; he still
  uses the placeholder image until a real photo is provided.
- **About Vision/Mission + team content (2026-07-11)**: rewrote the About **"Our Vision"**
  statement and added a new **"Our Mission"** section below it (`591efb0`; Mission is one size smaller
  than Vision for hierarchy — later further compacted, see above). Added real photos for **Elaine, Jack,
  Cindy** (then **removed Cindy's** per request — back to placeholder, moved to end). Added bios for
  **Cindy, Camille, Tyrone** and moved each into the complete group as they filled in; **Camille** pinned
  to her original spot. Enlarged team circles to `size-[22rem]` and bio text to `text-base`, tightened
  grid to `gap-6`/`max-w-[1300px]`. Tuned framing (zoom/lower/rotate) for the new photos. Note: homepage
  hero word **"future"** is `text-indigo-600` = **#4F46E5**.
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

### Team (end-of-list "awaiting content" group: Cindy, Derek, Arun, Leo, Jaden, Lori)

- **Placeholder images + bios needed**: **Derek Meng, Arun Banerjee, Leo Shi, Jaden Zhao**
  (added 2026-08-21, no photo and no bio yet), **Lori Ji** (bio added 2026-08-25, still needs a photo)
  and **Cindy Zhang** (bio done; had a photo, user removed
  it — `cindy-z.webp` still in repo, re-enable with `transform: scale(2.7) rotate(-18deg) translateY(11%);`).
  Previous members Lotus Wu and Leana Zhou also use placeholders. Drop
  `static/images/about/<firstname-lastinitial>.webp`, point `about.ts` at it, and move the member up out of
  the end "incomplete" group if they are in `team`.
- **Advisor Rian Caesar** has no photo and no bio, and that is **intentional** — the user confirmed
  2026-08-21 that "rian doesn't want anything". He keeps the `placeholder.svg` silhouette so his card
  still lines up next to Jun Liu's. Don't chase a photo or bio for him.
- **Position titles**: all current team show a dash (`-`) — real titles not yet provided.
- **Big team photo** removed from About (was above Advisors) — re-add if a good group photo appears.
