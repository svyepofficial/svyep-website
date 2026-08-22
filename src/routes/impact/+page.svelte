<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { mount, onMount } from 'svelte';
	import impact from '$lib/data/impact';
	import GlobeMarker from '$lib/components/GlobeMarker.svelte';
	import { HandPointing, MouseScroll } from 'phosphor-svelte';
	import { selectedLocation } from './state.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let globeElement: HTMLElement;

	$inspect(selectedLocation);

	onMount(async () => {
		const Globe = (await import('globe.gl')).default;
		const globe = new Globe(globeElement)
			.globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
			.pointOfView({ lat: 36, lng: -95 })
			.htmlElementsData(impact.locations)
			.htmlElement((location) => {
				const globeMarkerContainer = document.createElement('div');
				globeMarkerContainer.style.transition = 'opacity 250ms';
				mount(GlobeMarker, {
					target: globeMarkerContainer,
					props: {
						location: location
					}
				});
				return globeMarkerContainer;
			})
			.htmlElementVisibilityModifier((el, isVisible) => {
				if (isVisible) {
					el.style.opacity = '1';
				} else {
					el.style.opacity = '0';
				}
			})
			.backgroundColor('#00000000')
			.atmosphereColor('#4338ca');
		globe.controls().enableZoom = false;
		globe.controls().maxDistance = 250;
	});
</script>

<Seo
	title="Impact"
	description="The reach of SVYEP's work so far — students and attendees reached, funds raised, and the events and partnerships behind those numbers."
/>

<div class="relative flex flex-col items-center justify-center pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h2 class="flex flex-wrap items-center justify-center gap-1 text-gray-400">
		<div class="flex items-center gap-1">
			<MouseScroll size={20} /> Drag to move around<span class="mx-2"></span>
		</div>
		<div class="flex items-center gap-1">
			<HandPointing /> Hover & click on starred locations
		</div>
	</h2>
	<h1
		class="text-shadow-glow-white sm:y-10 my-10 text-center text-7xl leading-16 tracking-tighter text-white select-none sm:text-9xl sm:leading-24"
	>
		SVYEP is <span class="text-shadow-glow-blue font-serif text-indigo-600 italic">global.</span>
	</h1>
	<h2 class="-mb-4 text-2xl font-medium tracking-tighter text-white sm:text-4xl">
		<span class="font-serif text-5xl text-indigo-600">21</span> states,
		<span class="font-serif text-5xl text-indigo-600">17</span> countries
	</h2>
	<div bind:this={globeElement}></div>
	{#if selectedLocation.location}
		<p class="z-10 -mt-20 mb-40 w-10/12 text-center text-sm text-gray-400">
			{#each selectedLocation.location.schools as school}
				{school},{' '}
			{/each}
		</p>
	{/if}
</div>

<!-- move this under -->
