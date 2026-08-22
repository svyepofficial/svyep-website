<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	const { metadata, article: Article } = data;
</script>

<Seo
	title={metadata.title}
	description={metadata.subtitle}
	image={metadata.images?.[0] ?? '/logo.png'}
	type="article"
/>

<StarsBackground class="-z-10" starDensity={0.00003} />
<article
	class="prose prose-lg prose-h1:font-serif prose-zinc dark:prose-invert mr-auto mb-32 ml-auto min-h-screen max-w-[900px] px-8 pt-40 text-white"
>
	<a
		href="/articles"
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
