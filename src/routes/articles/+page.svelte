<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { cn } from '$lib/utils/cn.js';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	let selectedTab = $state('All');
</script>

<Seo
	title="Articles"
	description="Interviews with founders and investors, event recaps, and entrepreneurship writing from the SVYEP team."
/>

<div
	class="relative mr-auto ml-auto flex min-h-screen flex-col items-center pt-30 text-white sm:pt-40"
>
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<div class="flex flex-col items-center gap-4">
		<h1
			class="font-articles text-shadow-glow-white w-full text-center text-4xl font-medium text-wrap sm:text-6xl lg:text-7xl"
		>
			The SVYEP Chronicle
		</h1>
		<div class="flex gap-8 text-gray-400 select-none">
			<button
				class={cn(
					'hover:text-shadow-glow-white cursor-pointer transition hover:text-white',
					selectedTab === 'All' ? 'text-shadow-glow-white text-white' : ''
				)}
				onclick={() => {
					selectedTab = 'All';
				}}>All Articles</button
			>
			|
			<button
				class={cn(
					'hover:text-shadow-glow-white cursor-pointer transition hover:text-white',
					selectedTab === 'Events' ? 'text-shadow-glow-white text-white' : ''
				)}
				onclick={() => {
					selectedTab = 'Events';
				}}>Events</button
			>
			|
			<button
				class={cn(
					'hover:text-shadow-glow-white cursor-pointer transition hover:text-white',
					selectedTab === 'Stories' ? 'text-shadow-glow-white text-white' : ''
				)}
				onclick={() => {
					selectedTab = 'Stories';
				}}>Stories</button
			>
		</div>
		<div class="flex flex-col gap-1">
			<hr class="w-[1200px] text-indigo-600" />
			<hr class="w-[1200px] text-indigo-600" />
		</div>
	</div>
	<div class="flex max-w-[1200px] flex-col gap-10 p-10">
		{#each data.articles as article, index}
			{#if selectedTab === 'All' || article.metadata.type === selectedTab}
				<div
					class={cn(
						'flex flex-wrap items-center justify-center gap-10 md:flex-nowrap',
						index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
					)}
				>
					<a
						href={`/articles/${article.slug}`}
						class="group flex cursor-pointer flex-col transition"
					>
						<div class="flex font-serif text-xl font-semibold text-indigo-600">
							{article.metadata.type}
						</div>
						<h1
							class="font-serif text-5xl font-semibold text-white transition group-hover:text-indigo-600"
						>
							{article.metadata.title}
						</h1>
						<div class="mt-1 flex justify-between font-sans text-lg font-normal text-gray-400">
							<p>By {article.metadata.author}</p>
							<h3 class=" text-gray-400">
								{article.metadata.wordcount / 255 >= 1
									? `${Math.round(article.metadata.wordcount / 255)} minute read`
									: `1 minute read`}
							</h3>
						</div>
						<h2 class="mt-2">{article.metadata.subtitle}</h2>
					</a>
					<a href={`/articles/${article.slug}`} class="h-full w-full cursor-pointer sm:w-1/2">
						{#if article.metadata.images}
							<img
								src={article.metadata.images[0]}
								alt={article.metadata.title}
								class="hover:shadow-glow-blue-hover rounded-3xl outline-1 outline-indigo-600 transition"
							/>
						{/if}
					</a>
				</div>
				<hr class="text-gray-400/20" />
			{/if}
		{/each}
	</div>
</div>
