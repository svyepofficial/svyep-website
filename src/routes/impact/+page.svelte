<script lang="ts">
	import { mount, unmount } from 'svelte';
	import impact, { type Location } from '$lib/data/impact';
	import GlobeMarker from '$lib/components/GlobeMarker.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import HandPointing from 'phosphor-svelte/lib/HandPointing';
	import ArrowsOutCardinal from 'phosphor-svelte/lib/ArrowsOutCardinal';

	let globeElement: HTMLElement;
	let selected = $state<Location | null>(null);

	$effect(() => {
		let globe: { _destructor(): void } | undefined;
		const markers: ReturnType<typeof mount>[] = [];
		let cancelled = false;

		// globe.gl pulls in three.js, so it loads only in the browser, after first paint.
		import('globe.gl').then(({ default: Globe }) => {
			if (cancelled) return;
			const instance = new Globe(globeElement)
				.globeImageUrl('/images/impact/earth-night.webp')
				.pointOfView({ lat: 36, lng: -95 })
				.htmlElementsData(impact.locations)
				.htmlElement((data) => {
					const target = document.createElement('div');
					target.style.transition = 'opacity 250ms';
					markers.push(
						mount(GlobeMarker, {
							target,
							props: { location: data as Location, onselect: (l) => (selected = l) }
						})
					);
					return target;
				})
				.htmlElementVisibilityModifier((el, isVisible) => {
					el.style.opacity = isVisible ? '1' : '0';
				})
				.backgroundColor('#00000000')
				.atmosphereColor('#4338ca');
			instance.controls().enableZoom = false;
			globe = instance;
		});

		return () => {
			cancelled = true;
			markers.forEach((marker) => unmount(marker));
			globe?._destructor();
		};
	});
</script>

<Seo
	title="Impact"
	description="The reach of SVYEP's work so far — students and attendees reached, funds raised, and the events and partnerships behind those numbers."
/>

<div class="flex flex-col items-center px-6 pt-40 pb-24">
	<p class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
		<span class="flex items-center gap-2"><ArrowsOutCardinal size={16} /> Drag to move around</span>
		<span class="flex items-center gap-2"
			><HandPointing size={16} /> Hover and click the starred locations</span
		>
	</p>
	<h1 class="mt-8 text-center text-6xl tracking-tight sm:text-8xl">
		SVYEP is <span class="font-serif text-indigo-500 italic">global</span>
	</h1>
	<p class="mt-4 text-2xl font-medium sm:text-4xl">
		<span class="font-serif text-4xl text-indigo-400 sm:text-5xl">21</span> states,
		<span class="font-serif text-4xl text-indigo-400 sm:text-5xl">17</span> countries
	</p>
	<div bind:this={globeElement} class="w-full max-w-full overflow-hidden"></div>
	{#if selected}
		<section aria-live="polite" class="card -mt-16 w-full max-w-[1000px] p-6 sm:p-8">
			<h2 class="font-serif text-3xl">{selected.location}</h2>
			<p class="mt-1 text-zinc-400">
				{selected.number_of_schools}
				{selected.number_of_schools === 1 ? 'school' : 'schools'}
			</p>
			{#if selected.schools?.length}
				<ul class="mt-6 grid gap-x-8 gap-y-2 text-sm text-zinc-300 sm:grid-cols-2 lg:grid-cols-3">
					{#each selected.schools as school (school)}
						<li>{school}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/if}
</div>
