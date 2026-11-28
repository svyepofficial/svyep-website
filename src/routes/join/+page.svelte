<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { benefits } from '$lib/data/home';
</script>

<Seo
	title="Join"
	description="Apply to join SVYEP — a community of high school students building ventures, meeting industry leaders, and competing on a global stage."
/>

<img
	src="/images/join/01.webp"
	alt=""
	class="fixed inset-0 -z-10 h-lvh w-full object-cover opacity-15"
/>
<div class="mx-auto flex max-w-[1000px] flex-col items-center px-6 pt-40 pb-24">
	<h1 class="text-center text-6xl tracking-tight sm:text-8xl">
		Join us as a <span class="font-serif text-indigo-500 italic">member</span>
	</h1>
	<p class="mt-6 max-w-[760px] text-center font-serif text-xl text-zinc-300 sm:text-2xl">
		As a member, students will receive exclusive resources and opportunities only available to them.
	</p>
	<ul class="mt-12 grid w-full gap-4 md:grid-cols-3">
		{#each benefits as benefit (benefit.title)}
			<li class="card flex flex-col items-center gap-3 p-6 text-center">
				<benefit.icon size={32} class="text-indigo-400" />
				<h2 class="text-lg font-medium">{benefit.title}</h2>
				<p class="text-sm text-zinc-400">{benefit.description}</p>
			</li>
		{/each}
	</ul>
	<div class="mt-12 w-full max-w-[840px] overflow-hidden rounded-2xl">
		<iframe
			class="w-full"
			title="SVYEP student enrollment form"
			src="https://docs.google.com/forms/d/e/1FAIpQLSdVHSnd4eaIjKbw_QWfNovNRG-3hE2OLGkIgTciSEA3MnJJew/viewform?embedded=true"
			height="1900">Loading…</iframe
		>
	</div>
</div>
