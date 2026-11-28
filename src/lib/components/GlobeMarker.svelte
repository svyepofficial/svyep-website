<script lang="ts">
	import { StarFour } from 'phosphor-svelte';
	import { selectedLocation } from '../../routes/impact/state.svelte';
	let { location } = $props();
</script>

<button
	class="pointer-events-auto flex cursor-pointer flex-col items-center"
	onclick={() => {
		selectedLocation.location = location;
	}}
>
	<StarFour
		weight="fill"
		size={Math.min(8 + Math.log1p(location.number_of_schools) * 10, 50)}
		class="peer z-0 text-indigo-200 drop-shadow-2xl drop-shadow-indigo-600 transition hover:text-indigo-600"
	/>
	<div
		class="invisible absolute -top-12 z-50 flex flex-col items-center text-center text-nowrap text-white peer-hover:visible"
	>
		<h1 class="tracking-tigher w-fit bg-indigo-600 p-1 font-serif text-xl leading-5 italic">
			{location.location}
		</h1>
		<h2 class="text-shadow-md/60">
			{location.number_of_schools}
			{location.number_of_schools > 1 ? 'schools' : 'school'}
		</h2>
	</div>
</button>
