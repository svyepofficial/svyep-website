# SVYEP overhaul — audit and plan

Status: **approved 2026-11-27, being implemented on branch `overhaul`.** Baseline is commit `ce6fb43`.

## 1. What exists

SvelteKit 2.25 + Svelte 5.36 (runes), Tailwind 4.1, mdsvex, adapter-auto, deployed on Vercel from `main`.
~4,000 lines of app code: 11 routes, 10 shared components, 5 data files, 29 Markdown articles, 31 MB of static images.

| Route                           | What it does                                            | Notes                                             |
| ------------------------------- | ------------------------------------------------------- | ------------------------------------------------- |
| `/`                             | Hero, member benefits, 5 stats, quote, 3 offerings, CTA | 546 lines, scroll-driven transforms, Lottie globe |
| `/about`                        | Vision, mission, team, advisors, previous members       | Data in `data/about.ts`                           |
| `/events`                       | Featured events list                                    | Data in `data/events.ts`                          |
| `/ybvc`                         | Two competition cards                                   | Data inline in the page, duplicates `events.ts`   |
| `/young-innovators`             | 11-section program page                                 | 717 lines + 406-line data file                    |
| `/articles`, `/articles/[slug]` | "The SVYEP Chronicle" list, archive, article            | Server load + `article-dates.ts`                  |
| `/impact`                       | 3D globe of 36 locations                                | `globe.gl` + three.js                             |
| `/partner`, `/join`             | Google Form iframes, partner logos                      | Logo names parsed from filenames                  |
| `/donate`                       | Copy + Zelle link                                       |                                                   |
| `/api/articles`                 | JSON of all articles                                    | No caller in this repo                            |

## 2. Verified problems

Measured on the live site (1440px, Chrome) and in the code.

### Performance

- **Home transfers ~3.0 MB in 61 requests**: 2.26 MB images, a 452 KB Lottie WASM player from `cdn.jsdelivr.net`, plus a 428 KB `animation.json`, only to animate the logo globe.
- **6 always-animating `<canvas>` elements on home.** 5 are `StarsBackground` star fields running `requestAnimationFrame` forever, and the 6th is the Lottie player. Most other pages have 2 star fields; the article page has 1. They redraw every frame even when nothing changes. `prefers-reduced-motion` is not respected anywhere.
- **`/impact` lazy-loads a 1.7 MB (488 KB gzip) three.js/globe.gl chunk** in `onMount` and fetches its texture from jsdelivr. This doesn't block first paint, but it's heavy on phones. The globe is also unreadable to screen readers and crawlers, and the schools are only reachable by hovering tiny stars.
- **The page scroll is bound to `translateX(1000px)` on the home stats.** On mobile this causes horizontal overflow (text is clipped at 390px) and leaves a large empty band until the user scrolls.
- **4 Google Font families are loaded through chained CSS `@import`s**, which blocks rendering. One family (Cinzel Decorative) is used for a single heading.
- **Images are unsized and oversized.** Headshots up to 2851px are shown in 352px circles. `join/01.webp` is 1.1 MB and shown at 20% opacity. No `width`/`height` on most `<img>`, which causes layout shift. `about/teamphoto.webp` is no longer referenced.
- **Every page is server-rendered on demand.** Only `/articles` (query params, date-based archive) needs that. Everything else is static.

### Correctness and robustness

- **`/articles/<unknown>` returns HTTP 500, not 404.** The dynamic `import()` throws, and there is no `+error.svelte`.
- **`AnimateText` writes `innerHTML` and gives every instance `id="title"`**, so 5 instances on home share one id. It also animates `#title .word` globally, so every instance animates every other instance.
- **`$inspect` is left in `/impact`.** Markers are mounted imperatively with `mount()` into DOM nodes that are never unmounted. A component in `$lib` imports state from `routes/impact/`, which inverts the dependency direction.
- **Unformatted and inconsistent figures**: "$315000" in the home copy, while README stats differ from `home.ts`. `impact.ts` lists "John F. Kennedy High School — Fremont" twice. `number_of_schools` is maintained by hand next to the school list.
- **Fragile logo handling**: partner names come from filename regexes, a "featured" size comes from `/\/4[5-9]\s/`, filenames contain spaces, and community logo `alt` text is the asset URL.
- **Footer says © 2025.** README points at `svyep.org`, which is a different organisation.
- **`svelte-check` reports 3 errors** (`about`, `impact`, `AnimateText`).

### Architecture and duplication

- **The navigation link list is written out 4 times** (desktop row, tablet dropdown, mobile menu, footer). Adding "Young Innovators" needed four edits plus a width hack. Menus have no `aria-expanded`, no Escape key handling, and don't close on navigation.
- **YBVC competitions are defined both inline in `/ybvc` and in `events.ts`.** The two copies have different shapes: `image`/`photosUrl` against `thumbnail` with no leading slash. The merge has to keep the Lightroom photos link.
- **The member-benefit cards are copy-pasted** between `/` and `/join`.
- **The card markup** (`shadow-glow-gray … rounded-3xl border-2 …`) is repeated about 30 times across pages instead of being one component or class.
- **Three class-helper dependencies.**
  - `cn()` (`clsx` + `tailwind-merge`) is used in Navbar, Events, Articles and 4 decoration components.
  - `tailwind-variants` is used only in `Button`, where it relies on `twMerge` to settle `rounded-xl` against `rounded-2xl`.
  - Svelte 5.16+ accepts class arrays and objects natively but does **not** merge conflicting utilities. So the replacement must avoid conflicting classes rather than depend on merge order.
- **`motion` is used only by `AnimateNumber`, `AnimateText` and `Spotlight`**, all of which are decoration.
- **`prettier-plugin-tailwindcss` is in `dependencies`.** Commented-out code blocks are left in the home page, Navbar and Footer. The `w-ful` class typo is in the home stats.

### Accessibility and SEO

- **18 `<h1>`s on home.** Headings are picked for size, not structure (card titles are `h1`, the nav wordmark is `h1`).
- **No visible focus styles, no skip link, and a 1px-wide scrollbar.**
- **Body text is often `font-extralight` gray-400 on near-black**, which is hard to read.
- **The default OG image is the logo PNG.** `Seo` builds canonical and OG URLs from `page.url.origin`. That works with SSR, but under prerendering it would emit `http://sveltekit-prerender` unless `kit.prerender.origin` is set.

## 3. Visual audit (unslop signs)

| Sign                                                                                           | Where                                      |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Colored glows: `shadow-glow-blue`, text-shadow glow on almost every heading                    | Button, all page titles                    |
| Indigo gradient button with animated background-position                                       | `Button` default variant                   |
| Radial color washes and blurred blobs                                                          | Home stats, quote section, footer gradient |
| Decorative filler: animated starfield, sweeping spotlight beams, spinning Lottie globe         | Every page                                 |
| Glass pill navbar with blur and a glow                                                         | `Navbar`                                   |
| Weight 900 numbers, `tracking-tighter` everywhere, including small text                        | Home stats, Donate                         |
| Italic serif used for emphasis on every other phrase, highlighted words                        | Home, About, Young Innovators              |
| Uppercase shouting: `TODAY.`, `PARTNER`, `CONNECTIONS`                                         | Home, Join, Partner                        |
| Identical icon cards in rows of three (filled icons, glow)                                     | Home, Join, Young Innovators (4 sets)      |
| Pills as decoration                                                                            | Young Innovators chips, nav                |
| Parallax/scroll-bound motion, floating rotated photos, auto-scrolling marquees                 | Home                                       |
| Number tick-up animations on stats                                                             | Home, Donate                               |
| 4 unrelated display faces (Urbanist, Baskervville, GFS Didot, Cinzel Decorative)               | Global                                     |
| Trailing periods on headings ("Our Vision.", "Advisors.")                                      | About, Young Innovators                    |
| Generic copy ("Empowering the future of entrepreneurs", "We offer resources for your success") | Home                                       |

Verdict: **heavy slop.** This needs the full nine-pass treatment, not polish.

The site's best asset is underused. SVYEP has strong documentary photography of real rooms: Stanford pitch stages, roundtables, oversized prize checks. Right now those photos are tilted, dimmed to 30% opacity, or glowing.

## 4. Visual direction: polish mode (approved 2026-11-27)

The owner chose to **keep the existing identity**: the dark starry theme, the indigo accent, Urbanist with serif accents, the general layout of every page, and all the content. The goal is to remove what reads as generated and what costs performance, not to rebrand. A light "paper" rebrand was proposed and declined.

- **Product.** A student-run nonprofit that puts Bay Area high schoolers in the room with founders and investors (pitch competitions, events, internships), and runs free entrepreneurship workshops in grade-school classrooms.
- **Character.** Ambitious, earnest, a little formal: students in suits on a Stanford stage.
- **World.** Night-time Silicon Valley seen from above: the dark sky, the globe in the logo, city lights. This is the existing theme; it now gets executed with restraint.
- **Moments.**
  1. The hero globe.
  2. The big stat figures.
  3. The real event photos.
     Everything else gets quieter so these three read.
- **Signature.** The indigo serif-italic word inside a sans headline ("the _future_ of entrepreneurs"). It's already the site's habit; it's kept, used **once per headline at most**, and taken out of body copy.

### Design system (tokens, in `app.css` `@theme`)

- **Surfaces.**
  - The page stays `zinc-950`.
  - Cards are one raised step, `zinc-900`/`gray-900` at most, with a 1px hairline (`white/8`) instead of `border-2 white/5` plus a glow.
  - No radial blobs, beams or gradient footer. The footer becomes a hairline top border.
- **Stars.** One static star field per page, drawn once (or on resize) rather than every frame. It's fixed behind the page, with the same density as today. No per-section duplicates.
- **Accent: indigo.**
  - `indigo-500` for text and links on dark. `indigo-600` measures 3.6:1 on zinc-950 and fails as body-size text; this gets measured during implementation.
  - `indigo-600` as the primary button fill with white text.
  - No glow, no animated gradient.
- **Text.**
  - Three roles: `zinc-100` for primary, `zinc-400` for secondary, `zinc-500` for muted meta only.
  - Body text goes from `font-extralight` to `font-light`/`normal` for legibility.
- **Type.**
  - Urbanist (interface and headlines) and Baskervville (the serif accent word and the about/team names).
  - GFS Didot stays for the SVYEP wordmark and the Chronicle masthead. Cinzel Decorative is dropped, so 3 families instead of 4.
  - All are loaded by one `<link>` with preconnect instead of chained `@import`s.
  - Weights: big numbers go from 900 to 600, and headings use 400–500.
  - `tracking-tighter` only at 48px and above.
  - No text-shadow glow. No uppercase shouting (`TODAY.`, `PARTNER`, `CONNECTIONS`). No trailing indigo periods on headings.
- **Radius.**
  - 12 for buttons, 16 for cards, 24 for large photos.
  - The nav keeps its floating bar shape, as a solid surface with a hairline: no glow, no blur halo.
- **Buttons.**
  - Primary: solid `indigo-600`, hover `indigo-500`, a 2% press scale, and a visible focus ring.
  - Secondary: `zinc-800` with a hairline.
  - No gradients, glows or `transition-all`.
- **Motion.**
  - One easing curve, and hover is a 150ms color change.
  - The hero globe gets a single short fade-in.
  - The logo marquee keeps scrolling, since it's how the photos are shown, but it pauses on hover and stops under `prefers-reduced-motion`.
  - Removed:
    - scroll-bound translateX and parallax photo positions
    - number tick-ups
    - word fade-ins
    - the spotlight sweep
    - star twinkling
- **Icons.** Phosphor at one weight (regular) and one size per context. Filled 50px icons in cards become 32px regular, in indigo-400.

### Page composition (sections, order and content kept)

- **Home.**
  - The hero keeps the globe left and the text right. The globe becomes a static final-frame image instead of the 880 KB Lottie player and data. Its headline drops the glow and per-word animation.
  - Stats keep their layout and big figures, as static text with formatted numbers ("$315,000"). The tilted photos stay but stop moving with scroll, and the empty band and the mobile overflow are fixed.
  - The quote section's photo collage is positioned statically.
  - "01 / 02 / 03" offerings and the marquee CTA are kept, with the spacing, type and the "mentions" → "mentors" typo fixed.
- **About, Events, YBVC, Chronicle, Young Innovators, Join, Partner, Donate.**
  - Same layouts and copy.
  - The same token pass applies throughout: no glow, consistent card and button styles, one `h1`, readable body weight, sentence-case headings.
  - The Partner form stays behind its toggle, but the toggle loses its doubled arrows.
- **Impact.**
  - The globe is kept and restyled: no `$inspect`, and the state moves to `$lib`.
  - The texture is served from `static/` instead of jsdelivr. It's copied from the installed `three-globe` package, so no download is needed.
  - Markers are unmounted on destroy.
  - The school list for a location gets a real list layout instead of a comma run-on.

## 5. Technical plan

Keep the stack: no framework migration and no new runtime dependencies. This section has been revised after three independent reviews (simplicity, code accuracy, architecture); see §10.

1. **Delete or rewrite the decoration code.**
   - Delete `Spotlight`, `AnimateText` and `AnimateNumber`.
   - Replace the Lottie player and `animation.json` with a static WebP of the animation's final frame.
   - Rewrite `StarsBackground` so it draws once per resize (no `requestAnimationFrame` loop), and render it once, from the layout.
   - Keep `Marquee`, but have it honour hover-pause and `prefers-reduced-motion`.
   - Remove the `motion` and `@lottiefiles/dotlottie-svelte` dependencies.
   - Stats become static formatted strings. `AnimateNumber` renders "0" in SSR today, so crawlers currently see zeros.
2. **Replace the class helpers.**
   - Buttons become `.btn` / `.btn-secondary` classes in `app.css`. After the redesign every button is a styled link (`<a class="btn">`), so no component is needed.
   - Conditional classes use Svelte's native `class={[…]}`.
   - Delete `cn.ts`, `Button.svelte`, `clsx`, `tailwind-merge` and `tailwind-variants`.
   - Raise the `svelte` floor to `^5.16`, and move `prettier-plugin-tailwindcss` to `devDependencies`.
3. **Create `data/site.ts` as the single source for site-wide content.**
   - It holds the nav links, footer-only links, email, Instagram and form URLs, and the Navbar and Footer render from it.
   - The Navbar becomes one responsive component: a desktop row at ≥1024px and a menu below that. The menu button gets `aria-expanded`, and the menu closes on Escape and on navigation.
4. **Tokens in `app.css` via Tailwind 4 `@theme`.**
   - Fonts, radius and easing live there. The glow and shadow tokens are deleted.
   - No new shared components: page headers, cards and images stay plain markup, styled with the shared classes.
5. **Consolidate the data.**
   - YBVC reads from `events.ts`, which gains optional `photosUrl` and a normalised `image` path.
   - Member benefits are defined once and used by `/` and `/join`.
   - New `data/partners.ts` gives explicit names for alt text. Files are renamed without spaces, and the filename regex and "featured" hack are dropped.
   - The duplicate school is removed, and counts are derived from `schools.length`. California's count becomes **60, down from 61**.
   - This happens inside the page steps that rewrite those pages.
6. **Articles.**
   - `article-dates.ts` stays as it is. The frontmatter move was dropped together with the dateline idea in polish mode.
   - `[slug]` checks the slug against the article glob's keys and calls `error(404)` for unknown ones. The same keys feed the prerender `entries`.
   - Add a root `+error.svelte`.
   - Strip the hard-coded `rounded-3xl`/width classes from `<img>` tags in the Markdown, so the article layout styles them.
   - Delete `/api/articles` and `getAllArticles` (D3).
7. **Prerender (its own commit).**
   - New root `+layout.ts` with `prerender = true`. `/articles` opts out, because it reads query params and computes a date-relative archive.
   - Set `kit.prerender.origin = 'https://www.svyep.com'`, so canonical and OG URLs are correct.
   - Delete `impact/+page.server.ts`.
   - The 404 check for unknown slugs is verified on the Vercel preview, not just locally.
8. **Images.**
   - One-time downscale with macOS `sips`, which can write WebP (checked here): headshots to 800px, content photos to 1600px, the hero to 2400px.
   - Add `width`/`height` attributes, plus `loading="lazy"` below the fold.
   - Delete unreferenced files only after a grep confirms nothing uses them. The prerender crawler would fail the build on a broken internal link anyway.
9. **Accessibility.**
   - One `h1` per page and a real heading order.
   - A skip link, a visible `:focus-visible` ring, and the default scrollbar.
   - Real `alt` text on the logos, and a photo as the default OG image.
   - No sitemap or robots.txt: 11 routes, all linked from the nav, so they add nothing.
10. **Housekeeping.**
    - Fix the 3 `svelte-check` errors. `AnimateText` and the impact error go with deleted code.
    - Remove commented-out code, the `w-ful` typo and the `$inspect` call.
    - Fix the partner form's iframe title, the README domain and stack list, and the footer year (computed, so it freezes at build time, which is fine).
    - Add a short project `CLAUDE.md`: conventions plus a pointer to the `@theme` tokens, not a copy of them.
    - Prune `handoff.md` and update the auto-memory index.

## 6. Order of work (each step is one commit; each builds and renders on its own)

0. **Lockfile (D4)** as its own commit. Check that the Vercel build log shows the expected package manager.
1. **Tokens, fonts and base styles, plus the shared chrome.** This covers the `.btn` classes, Navbar/Footer from `site.ts`, and `+error.svelte`.
2. **Delete the decoration components and dependencies.** → Build passes, and `grep` shows no references remain.
3. **Home** (all nine unslop passes), with the shared member benefits.
4. **About, Events and YBVC** (shared event data, `Dateline`).
5. **Chronicle index, article page, 404**, and the frontmatter dates.
6. **Young Innovators, Join, Partner (`partners.ts`) and Donate.**
7. **Impact**: restyle and fix the globe.
8. **Prerendering**, as its own commit.
9. **Images.**
10. **Verification sweep and docs.**

## 7. Decisions (answered 2026-11-27)

- **D1 Theme.** Keep the existing dark theme, colors, layout and content, and deslop them. This is unslop polish mode (§4).
- **D2 Impact globe.** Keep it, restyled, with its code fixed.
- **D3 `/api/articles`.** Delete.
- **D4 Lockfile.** Switch to npm: commit `package-lock.json` and delete `bun.lock` in the same commit.
- **D5 Deploys.**
  - Work happens on the branch `overhaul`, and every push to it gets a Vercel **preview** URL.
  - `main` = **live** svyep.com. It's merged into only with the owner's explicit approval.
  - Every push is announced, with the branch name and whether it is preview or live.
- **Also approved:** California's school count changes to 60, and other recommendations go ahead within this scope.

## 8. Benefits, risks, rollback

- **Expected.**
  - Home goes from ~3.0 MB to well under 1 MB, with no always-on animation loops and no runtime code from jsdelivr. Google Fonts stays as the only third-party request.
  - `/impact` no longer depends on jsdelivr for its texture, and its code issues are fixed. three.js stays, because the globe is kept.
  - 7–8 fewer dependencies.
  - Static HTML for every page except the Chronicle index.
  - One place to edit links, events, partners and benefits.
  - Readable, accessible type.
- **Risks.**
  - A redesign changes how the brand feels. Mitigated by keeping the logo and a descendant of the indigo, and by approving the direction first.
  - A missing prerender `entries` item or a broken link fails the build loudly. Checked.
  - The prerendered origin could be wrong. Fixed by `prerender.origin` and checked in the built HTML.
  - Image downscaling is lossy. The originals stay in git history.
  - The lockfile change upgrades dependencies within their `^` ranges. Isolated in step 0 and checked on a preview deploy.
  - New content added on `main` during the branch. Mitigated by merging `main` in regularly.
- **Rollback.** Every step is its own commit. `git revert <sha>` undoes one step, and Vercel's "Promote" on an earlier deployment restores the live site instantly.

## 9. Verification criteria

- `npm run build`, `npm run check` (0 errors), and `npx prettier --check .` all pass.
- Every route is checked in my Chrome tab at its existing size, and in headless Chrome (separate profile) at 1440, 820 and 390px. Before screenshots of every route are taken first. For each route:
  - no horizontal overflow
  - no console errors
  - no failed requests
  - exactly 1 `h1`
  - keyboard navigation works through the menu and the accordions
- Before/after on home: request count, bytes, LCP, and the number of animating canvases.
- `/articles/999` returns 404 on the preview deploy. Archive pagination still works. The `/join` and `/partner` forms load. The built HTML has `https://www.svyep.com` canonical and OG URLs.
- A `grep` confirms each deleted component and dependency has no remaining reference.

## 10. Independent review (Elephant Goldfish)

Three reviewers read this plan against the code: simplicity, code accuracy, and architecture. Changes made because of them:

- The `cn` usage and canvas-count claims were corrected.
- The YBVC merge keeps `photosUrl`.
- `Button`, `PageHeader` and `Photo` were cut in favour of plain markup and CSS classes.
- The sitemap and robots.txt were cut.
- The article-date move now has a stated reason and a single glob.
- Prerendering gained `prerender.origin`, a root `+layout.ts`, and its own commit.
- The globe justification was corrected: it's lazy-loaded, so the gains are accessibility and phones, not first paint.
- The npm lockfile switch is recommended, with both lockfiles never committed together.
- The hero image is 2400px.
- California's count changing to 60 is called out.
- Google Fonts is acknowledged as remaining third-party.
