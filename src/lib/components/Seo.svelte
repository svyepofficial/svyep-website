<script lang="ts">
	import { page } from '$app/state';

	/*
	 * Shared <head> tags: page title, meta description, and Open Graph / Twitter
	 * cards so links to the site preview properly when shared.
	 *
	 * `title` is the page-specific part only — " • SVYEP" is appended here.
	 * `image` should be a root-relative path (e.g. /images/...); it is turned
	 * into an absolute URL because OG/Twitter crawlers reject relative ones.
	 */
	let {
		title,
		description,
		image = '/logo.png',
		type = 'website'
	}: {
		title: string;
		description: string;
		image?: string;
		type?: 'website' | 'article';
	} = $props();

	const siteName = 'SVYEP';
	const fullTitle = $derived(`${title} • ${siteName}`);
	const canonical = $derived(new URL(page.url.pathname, page.url.origin).href);
	const absoluteImage = $derived(new URL(image, page.url.origin).href);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:site_name" content={siteName} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={absoluteImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImage} />
</svelte:head>
