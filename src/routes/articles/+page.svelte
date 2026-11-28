<script lang="ts">
	import { page } from '$app/state';
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
	class="mx-auto flex min-h-screen max-w-[1200px] flex-col items-center px-6 pt-36 pb-24 sm:pt-44"
	data-sveltekit-preload-data="off"
	data-sveltekit-preload-code="off"
>
	<h1 class="font-articles text-center text-5xl font-medium tracking-tighter sm:text-7xl">
		The SVYEP Chronicle
	</h1>
	<nav
		aria-label="Chronicle sections"
		class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-zinc-400 sm:gap-x-10"
	>
		{#each sections as [label, href] (label)}
			<a
				{href}
				aria-current={selected === label ? 'page' : undefined}
				class="py-1 transition-colors hover:text-zinc-100 aria-[current=page]:text-zinc-100 aria-[current=page]:underline aria-[current=page]:decoration-indigo-400 aria-[current=page]:underline-offset-8"
				>{label}</a
			>
		{/each}
	</nav>
	<div class="mt-6 flex w-full flex-col gap-1" aria-hidden="true">
		<hr class="border-white/15" />
		<hr class="border-white/15" />
	</div>

	<ul class="flex w-full flex-col divide-y divide-white/8">
		{#each visibleArticles as article, index (article.slug)}
			<li>
				<a
					href="/articles/{article.slug}"
					class={[
						'group flex flex-col items-center gap-8 py-12 md:flex-row md:gap-12',
						index % 2 === 1 && 'md:flex-row-reverse'
					]}
				>
					<div class="flex flex-1 flex-col gap-2">
						<p
							class="flex items-baseline gap-2 font-serif text-lg font-semibold tracking-tighter text-indigo-400"
						>
							{article.type}
							{#if data.archive}
								<span aria-hidden="true">·</span>
								<time datetime={article.date}>{article.date.slice(0, 4)}</time>
							{/if}
						</p>
						<h2
							class="font-serif text-3xl leading-tight font-semibold tracking-tighter transition-colors group-hover:text-indigo-300 sm:text-4xl"
						>
							{article.title}
						</h2>
						<p class="flex flex-wrap justify-between gap-x-4 text-zinc-400">
							<span>By {article.author}</span>
							<span class="tabular-nums"
								>{Math.max(1, Math.round(article.wordcount / 255))} min read</span
							>
						</p>
						<p class="mt-2 text-zinc-300">{article.subtitle}</p>
					</div>
					{#if article.cover}
						<img
							src={article.cover}
							alt=""
							width="1200"
							height="800"
							loading={index === 0 ? 'eager' : 'lazy'}
							decoding="async"
							class="aspect-[3/2] w-full rounded-2xl object-cover md:w-[45%]"
						/>
					{/if}
				</a>
			</li>
		{:else}
			<li class="py-10 text-center text-zinc-400">
				{data.archive ? 'No archived articles yet.' : 'No recent articles in this section.'}
			</li>
		{/each}
	</ul>
	{#if data.archive && data.pages > 1}
		<nav
			aria-label="Archive pages"
			class="mt-8 flex items-center justify-center gap-6 text-zinc-400"
		>
			{#if data.page > 1}
				<a rel="prev" href="/articles?view=archive&page={data.page - 1}" class="link">Previous</a>
			{/if}
			<span class="tabular-nums">Page {data.page} of {data.pages}</span>
			{#if data.page < data.pages}
				<a rel="next" href="/articles?view=archive&page={data.page + 1}" class="link">Next</a>
			{/if}
		</nav>
	{/if}
</div>
