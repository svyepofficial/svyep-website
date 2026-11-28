<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { ArrowDown, ArrowUp } from 'phosphor-svelte';
	import { fade } from 'svelte/transition';
	import Seo from '$lib/components/Seo.svelte';

	const logoName = (path: string) =>
		path
			.split('/')
			.at(-1)
			?.replace(/\.png$/, '')
			.replace(/^\d+\s+/, '')
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (letter) => letter.toUpperCase()) ?? 'Partner logo';

	const isAddedLogo = (path: string) => /\/4[5-9]\s/.test(path);

	const companiesAndOrganizations = Object.entries(
		import.meta.glob('/src/lib/logos/companies-and-organizations/*.png', {
			eager: true,
			import: 'default'
		})
	).map(([path, url]) => ({
		name: logoName(path),
		url: url as string,
		featured: isAddedLogo(path)
	}));

	const communityInitiatives = Object.values(
		import.meta.glob('/src/lib/logos/community-initiatives/*.png', {
			eager: true,
			import: 'default'
		})
	);

	let isFormOpen = $state(false);
</script>

<Seo
	title="Partner"
	description="Partner with SVYEP to reach and support the next generation of young founders through sponsorship, mentorship, and events."
/>

<div class="relative flex flex-col items-center pt-52">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h1
		class="text-shadow-glow-white px-4 text-center text-6xl tracking-tighter text-white sm:text-8xl"
	>
		<span class="text-shadow-glow-blue font-bold text-indigo-600">PARTNER</span> with us.
	</h1>
	<Button
		size="lg"
		class="mt-4 mb-20 flex items-center gap-2"
		onclick={() => {
			isFormOpen = !isFormOpen;
		}}
	>
		{#if isFormOpen}
			<ArrowUp />
		{:else}
			<ArrowDown />
		{/if}
		Interest Form
		{#if isFormOpen}
			<ArrowUp />
		{:else}
			<ArrowDown />
		{/if}
	</Button>
	{#if isFormOpen}
		<iframe
			in:fade={{ duration: 800 }}
			class="mt-10 w-full opacity-90 sm:w-[840px]"
			title="SVYEP Student Enrollment Form"
			src="https://docs.google.com/forms/d/e/1FAIpQLSdQCc0DtoD2cA7en22z78AKhd9buIx81cVk6AUlDE62KwgN1w/viewform?embedded=true"
			width="840"
			height="3600"
			frameborder="0"
			marginheight="0"
			marginwidth="0">Loading...</iframe
		>
	{/if}
	<div class="my-10 flex w-full flex-col items-center gap-4">
		<div class="flex max-w-[900px] flex-col items-center px-4">
			<h1
				class="mb-4 text-center font-serif text-4xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-[5px] underline-offset-8 sm:text-6xl"
			>
				Companies & Organizations
			</h1>
			<p class="text-md mb-4 text-center text-gray-400">
				The following companies and organizations are ones SVYEP has had the privilege of engaging
				with in a variety of ways, including partnering with them to co-host events, featuring their
				founders and leaders in interviews and Zoom webinars, and participation of their
				representatives in SVYEP hosted events.
			</p>
		</div>
		<div
			class="mx-4 grid w-full max-w-6xl grid-cols-2 items-center gap-x-8 gap-y-8 rounded-lg border border-white/10 bg-white/[0.025] px-8 py-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
		>
			{#each companiesAndOrganizations as company}
				<div class="flex h-16 items-center justify-center">
					<img
						src={company.url}
						alt={company.name}
						class={`max-w-full object-contain opacity-60 contrast-75 grayscale transition-transform duration-200 select-none hover:scale-105 ${company.featured ? 'max-h-16' : 'max-h-12'}`}
					/>
				</div>
			{/each}
		</div>
	</div>
	<div class="my-10 flex flex-col items-center gap-4">
		<div class="flex max-w-[900px] flex-col items-center px-4">
			<h1
				class="mb-4 text-center font-serif text-4xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-[5px] underline-offset-8 sm:text-6xl"
			>
				Community Initiatives
			</h1>
			<p class="text-md mb-4 text-center text-gray-400">
				We have supported these organizations through donation.
			</p>
		</div>
		<div class="flex flex-wrap justify-center gap-12 opacity-60 contrast-75 grayscale">
			{#each communityInitiatives as url}
				<img src={url as string} alt={url as string} class="h-[100px] select-none" />
			{/each}
		</div>
	</div>
	<div class="my-10 flex flex-col items-center gap-4">
		<div class="flex max-w-[900px] flex-col items-center px-4">
			<h1
				class="mb-4 text-center font-serif text-4xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-[5px] underline-offset-8 sm:text-6xl"
			>
				Charitable Causes
			</h1>
			<p class="text-md mb-4 text-center text-gray-400">
				We have supported these causes through donations.
			</p>
		</div>
		<div class="flex gap-12 opacity-50">
			<h1 class="text-5xl font-bold text-white">2025 LA Wildfires</h1>
		</div>
	</div>
</div>
