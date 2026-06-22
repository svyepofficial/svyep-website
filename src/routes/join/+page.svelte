<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import Star from 'phosphor-svelte/lib/Star';
	import HandCoins from 'phosphor-svelte/lib/HandCoins';
	import Envelope from 'phosphor-svelte/lib/Envelope';
</script>

<svelte:head>
	<title>Join • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center pt-30 sm:pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<img
		src="/images/join/01.webp"
		alt=""
		class="fixed -z-10 -mt-60 h-[120lvh] w-lvw object-cover opacity-20"
	/>
	<div class="flex flex-col items-center">
		<h1 class="text-shadow-glow-white text-center text-6xl tracking-tighter text-white sm:text-8xl">
			Join us as a member <span class="text-shadow-glow-blue font-bold text-indigo-600">TODAY.</span
			>
		</h1>
		<h2
			class="max-w-[1000px] text-center font-serif text-lg tracking-tighter text-gray-200 sm:text-2xl"
		>
			As a member, students will receive <span class="text-white">exclusive</span> resources and opportunities
			only available to them.
		</h2>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<div
				class="shadow-glow-gray z-10 flex w-[300px] flex-col items-center justify-center gap-2 rounded-3xl border-2 border-white/5 bg-gray-800/80 p-6 text-white transition-all hover:border-white/50 hover:bg-gray-700"
			>
				<HandCoins size={50} weight="fill" />
				<h1 class="text-center text-lg leading-5 font-medium">AI Internship Opportunities</h1>
			</div>
			<div
				class="shadow-glow-gray z-10 flex w-[300px] flex-col items-center justify-center gap-2 rounded-3xl border-2 border-white/5 bg-gray-800/80 p-6 text-white transition-all hover:border-white/50 hover:bg-gray-700"
			>
				<Star size={50} weight="fill" />
				<h1 class="text-center text-lg leading-5 font-medium">
					Access to exclusive interviews with industry leaders
				</h1>
			</div>
			<div
				class="shadow-glow-gray z-10 flex w-[300px] flex-col items-center justify-center gap-2 rounded-3xl border-2 border-white/5 bg-gray-800/80 p-6 text-white transition-all hover:border-white/50 hover:bg-gray-700"
			>
				<Envelope size={50} />
				<h1 class="text-center text-lg leading-5 font-medium">Invites into SVYEP events</h1>
			</div>
		</div>
		<iframe
			class="mt-10 w-full opacity-90 sm:w-[840px]"
			title="SVYEP Student Enrollment Form"
			src="https://docs.google.com/forms/d/e/1FAIpQLSdVHSnd4eaIjKbw_QWfNovNRG-3hE2OLGkIgTciSEA3MnJJew/viewform?embedded=true"
			width="840"
			height="1900"
			frameborder="0"
			marginheight="0"
			marginwidth="0">Loading...</iframe
		>
	</div>
</div>
