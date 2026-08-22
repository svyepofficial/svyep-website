<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import events from '$lib/data/events';
	import { cn } from '$lib/utils/cn';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Events"
	description="Pitch competitions, VC summits, and speaker events hosted and co-hosted by SVYEP, from Stanford to the Bay Area Founders Club."
/>

<div class="relative flex flex-col items-center gap-10 pt-30 pb-20 sm:pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h1
		class="text-shadow-glow-white px-6 text-center text-7xl tracking-tighter text-white select-none sm:text-9xl"
	>
		Featured <span class="text-shadow-glow-blue font-serif text-indigo-600 italic">SVYEP</span>
		Events
	</h1>
	<div class="flex w-full max-w-[1500px] flex-col px-6 sm:px-10">
		{#each events.featured_events as event, index}
			<div
				class={cn(
					'grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16',
					index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'
				)}
			>
				<div class="flex flex-col items-start">
					{#if event.subtitle}
						<h2 class="font-serif text-lg font-light tracking-tighter text-indigo-400">
							{event.subtitle}
						</h2>
					{/if}
					<h1 class="z-10 mt-2 text-5xl font-semibold tracking-tighter text-white md:text-6xl">
						{event.title}
					</h1>
					<p class="max-w-3xl pt-8 text-2xl leading-relaxed font-light text-gray-400">
						{event.description}
					</p>
					{#if event.article}
						<Button href="/articles/{event.article}" size="lg" class="mt-8">Read More</Button>
					{/if}
				</div>
				<div class="flex justify-center">
					{#if event.video}
						<iframe
							title={event.title}
							src={event.video}
							allowfullscreen
							allow="encrypted-media *;"
							class="hover:shadow-glow-blue-hover aspect-video w-full rounded-3xl border-2 border-indigo-600 object-cover transition"
						></iframe>
					{:else if event.thumbnail}
						<img
							src="/{event.thumbnail}"
							alt={event.title}
							class="hover:shadow-glow-blue-hover aspect-[3/2] w-full rounded-3xl border-2 border-indigo-600 object-cover transition"
						/>
					{/if}
				</div>
			</div>
			{#if index !== events.featured_events.length - 1}
				<hr class="border-gray-400/20" />
			{/if}
		{/each}
	</div>
</div>
