<script lang="ts">
	import type { Location } from '$lib/data/impact';
	import StarFour from 'phosphor-svelte/lib/StarFour';

	let { location, onselect }: { location: Location; onselect: (location: Location) => void } =
		$props();

	const count = $derived(location.number_of_schools);
</script>

<button
	type="button"
	class="group pointer-events-auto relative flex cursor-pointer flex-col items-center"
	aria-label="{location.location}: {count} {count === 1 ? 'school' : 'schools'}"
	onclick={() => onselect(location)}
>
	<StarFour
		weight="fill"
		size={Math.min(8 + Math.log1p(count) * 10, 50)}
		class="text-indigo-200 transition-colors group-hover:text-indigo-400"
	/>
	<span
		class="invisible absolute -top-14 flex flex-col items-center rounded-lg border border-white/8 bg-zinc-900 px-3 py-1.5 text-center text-nowrap group-hover:visible group-focus-visible:visible"
	>
		<span class="font-serif text-lg leading-5">{location.location}</span>
		<span class="text-sm text-zinc-400">{count} {count === 1 ? 'school' : 'schools'}</span>
	</span>
</button>
