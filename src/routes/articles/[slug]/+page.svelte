<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	let { metadata, article: Article } = $derived(data);
	let backHref = $state('/articles');
	afterNavigate(({ from }) => {
		if (from?.url.pathname === '/articles') backHref = from.url.pathname + from.url.search;
	});
</script>

<Seo
	title={metadata.title}
	description={metadata.subtitle}
	image={metadata.images?.[0] ?? '/logo.png'}
	type="article"
/>

<article
	class="prose prose-lg prose-invert prose-zinc prose-headings:font-medium prose-a:text-indigo-400 mx-auto max-w-[760px] px-6 pt-40 pb-32"
>
	<a
		href={backHref}
		class="not-prose mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-100"
		><ArrowLeft size={18} />Back</a
	>
	<header class="not-prose mb-12 flex flex-col gap-3">
		<p class="font-serif text-xl text-indigo-400">{metadata.type}</p>
		<h1 class="font-serif text-4xl leading-tight sm:text-5xl">{metadata.title}</h1>
		<p class="text-lg text-zinc-400">By {metadata.author}</p>
	</header>
	<Article />
</article>
