<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { companies, communityInitiatives } from '$lib/data/partners';
	import CaretDown from 'phosphor-svelte/lib/CaretDown';

	let isFormOpen = $state(false);
</script>

<Seo
	title="Partner"
	description="Partner with SVYEP to reach and support the next generation of young founders through sponsorship, mentorship, and events."
/>

<div class="mx-auto flex max-w-[1200px] flex-col items-center px-6 pt-40 pb-32">
	<h1 class="text-center text-6xl tracking-tighter sm:text-8xl">
		<span class="font-serif tracking-tighter text-indigo-500 italic">Partner</span> with us
	</h1>
	<button
		type="button"
		class="btn btn-primary btn-lg mt-10"
		aria-expanded={isFormOpen}
		aria-controls="partner-form"
		onclick={() => (isFormOpen = !isFormOpen)}
	>
		Interest form
		<CaretDown size={18} class={['transition-transform', isFormOpen && 'rotate-180']} />
	</button>
	{#if isFormOpen}
		<div id="partner-form" class="mt-10 w-full max-w-[840px] overflow-hidden rounded-2xl">
			<iframe
				class="w-full"
				title="SVYEP partner interest form"
				src="https://docs.google.com/forms/d/e/1FAIpQLSdQCc0DtoD2cA7en22z78AKhd9buIx81cVk6AUlDE62KwgN1w/viewform?embedded=true"
				height="3600">Loading…</iframe
			>
		</div>
	{/if}

	<section class="mt-32 flex w-full flex-col items-center gap-8">
		<div class="flex max-w-[760px] flex-col items-center gap-4 text-center">
			<h2 class="font-serif text-4xl tracking-tighter sm:text-6xl">Companies and organizations</h2>
			<p class="text-zinc-400">
				The following companies and organizations are ones SVYEP has had the privilege of engaging
				with in a variety of ways, including partnering with them to co-host events, featuring their
				founders and leaders in interviews and Zoom webinars, and participation of their
				representatives in SVYEP hosted events.
			</p>
		</div>
		<ul
			class="card grid w-full grid-cols-2 items-center gap-8 px-8 py-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
		>
			{#each companies as company (company.name)}
				<li class="flex h-16 items-center justify-center">
					<img
						src={company.url}
						alt={company.name}
						loading="lazy"
						class={[
							'max-w-full object-contain opacity-60 grayscale',
							company.large ? 'max-h-16' : 'max-h-12'
						]}
					/>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mt-24 flex flex-col items-center gap-8">
		<div class="flex flex-col items-center gap-4 text-center">
			<h2 class="font-serif text-4xl tracking-tighter sm:text-6xl">Community initiatives</h2>
			<p class="text-zinc-400">We have supported these organizations through donation.</p>
		</div>
		<ul class="flex flex-wrap justify-center gap-12">
			{#each communityInitiatives as org (org.name)}
				<li>
					<img
						src={org.url}
						alt={org.name}
						loading="lazy"
						class="h-[100px] w-auto opacity-60 grayscale"
					/>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mt-24 flex flex-col items-center gap-6 text-center">
		<div class="flex flex-col items-center gap-4">
			<h2 class="font-serif text-4xl tracking-tighter sm:text-6xl">Charitable causes</h2>
			<p class="text-zinc-400">We have supported these causes through donations.</p>
		</div>
		<p class="text-4xl font-medium text-zinc-400 sm:text-5xl">2025 LA Wildfires</p>
	</section>
</div>
