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
	class="prose prose-lg prose-h1:font-serif prose-zinc dark:prose-invert mr-auto mb-32 ml-auto min-h-screen max-w-[900px] px-8 pt-40 text-white"
>
	<a
		href={backHref}
		class="mb-10 flex items-center gap-2 text-gray-400 no-underline hover:underline"
		><ArrowLeft size={20} weight="bold" />Back</a
	>
	<div class="flex font-serif text-2xl font-semibold text-indigo-600">
		{metadata.type}
	</div>
	<h1 class="text-white">
		{metadata.title}
		<div class="flex justify-between font-sans text-lg font-normal text-gray-400">
			<p>By {metadata.author}</p>
		</div>
	</h1>
	<Article />
</article>
