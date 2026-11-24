<script lang="ts">
	import { page } from '$app/state';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { cn } from '$lib/utils/cn.js';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	const sections = [
		['All Articles', '/articles'],
		['Events', '/articles?category=Events'],
		['Stories', '/articles?category=Stories'],
		['Archive', '/articles?view=archive']
	] as const;
	let category = $derived(page.url.searchParams.get('category'));
	let selected = $derived(
		data.archive
			? 'Archive'
			: category === 'Events' || category === 'Stories'
				? category
				: 'All Articles'
	);
	let visibleArticles = $derived(
		selected === 'Events' || selected === 'Stories'
			? data.articles.filter((article) => article.type === selected)
			: data.articles
	);
</script>

<Seo
	title="Articles"
	description="Interviews with founders and investors, event recaps, and entrepreneurship writing from the SVYEP team."
/>

<div
	class="relative mr-auto ml-auto flex min-h-screen flex-col items-center pt-30 text-white sm:pt-40"
	data-sveltekit-preload-data="off"
	data-sveltekit-preload-code="off"
>
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-4 px-4 sm:px-0">
		<h1
			class="font-articles text-shadow-glow-white w-full text-center text-4xl font-medium text-wrap sm:text-6xl lg:text-7xl"
		>
			The SVYEP Chronicle
		</h1>
		<nav
			aria-label="Chronicle sections"
			class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-400 select-none sm:gap-x-8"
		>
			{#each sections as [label, href], index}
				{#if index > 0}<span aria-hidden="true">|</span>{/if}
				<a
					{href}
					aria-current={selected === label ? 'page' : undefined}
					class={cn(
						'hover:text-shadow-glow-white py-1 transition hover:text-white',
						selected === label && 'text-shadow-glow-white text-white'
					)}>{label}</a
				>
			{/each}
		</nav>
		<div class="flex w-full flex-col gap-1">
			<hr class="text-indigo-600" />
			<hr class="text-indigo-600" />
		</div>
	</div>
	<div class="flex w-full max-w-[1200px] flex-col gap-10 p-6 sm:p-10">
		{#each visibleArticles as article, index (article.slug)}
			<div
				class={cn(
					'flex flex-wrap items-center justify-center gap-10 md:flex-nowrap',
					index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
				)}
			>
				<a href={`/articles/${article.slug}`} class="group flex cursor-pointer flex-col transition">
					<div class="flex items-baseline gap-2 font-serif text-xl font-semibold text-indigo-600">
						{article.type}
						{#if data.archive}
							<span aria-hidden="true">&middot;</span>
							<time datetime={article.date}>{article.date.slice(0, 4)}</time>
						{/if}
					</div>
					<h2
						class="font-serif text-4xl font-semibold text-white transition group-hover:text-indigo-600 sm:text-5xl"
					>
						{article.title}
					</h2>
					<div
						class="mt-1 flex flex-wrap justify-between gap-x-4 font-sans text-lg font-normal text-gray-400"
					>
						<p>By {article.author}</p>
						<span class="text-gray-400">
							{Math.max(1, Math.round(article.wordcount / 255))} minute read
						</span>
					</div>
					<p class="mt-2">{article.subtitle}</p>
				</a>
				{#if article.cover}
					<a href={`/articles/${article.slug}`} class="h-full w-full cursor-pointer sm:w-1/2">
						<img
							src={article.cover}
							alt={article.title}
							loading={index === 0 ? 'eager' : 'lazy'}
							decoding="async"
							class="hover:shadow-glow-blue-hover rounded-3xl outline-1 outline-indigo-600 transition"
						/>
					</a>
				{/if}
			</div>
			<hr class="text-gray-400/20" />
		{:else}
			<p class="py-10 text-center text-gray-400">
				{data.archive ? 'No archived articles yet.' : 'No recent articles in this section.'}
			</p>
		{/each}
		{#if data.archive && data.pages > 1}
			<nav aria-label="Archive pages" class="flex items-center justify-center gap-6 text-gray-400">
				{#if data.page > 1}
					<a
						rel="prev"
						href={`/articles?view=archive&page=${data.page - 1}`}
						class="text-white hover:underline">Previous</a
					>
				{/if}
				<span>Page {data.page} of {data.pages}</span>
				{#if data.page < data.pages}
					<a
						rel="next"
						href={`/articles?view=archive&page=${data.page + 1}`}
						class="text-white hover:underline">Next</a
					>
				{/if}
			</nav>
		{/if}
	</div>
</div>
