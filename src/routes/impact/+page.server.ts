// The globe (globe.gl) is loaded lazily inside onMount, so it never runs on the
// server — the page can be server-rendered. Prerender is off because SSR here
// exists for crawlers/meta tags, not for build-time output.
export const ssr = true;
