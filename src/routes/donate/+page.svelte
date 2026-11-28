<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { raised } from '$lib/data/home';

	const zelle =
		'https://enroll.zellepay.com/qr-codes/?data=eyJuYW1lIjoiRURVQ0FUT1JTIEZPUiBJTVBBQ1QiLCJ0b2tlbiI6IjQwOC0yMTAtMjAyNCIsImFjdGlvbiI6InBheW1lbnQifQ';
</script>

<Seo
	title="Donate"
	description="Support SVYEP. Donations fund pitch competitions, prize money, and free entrepreneurship programming for high school students."
/>

<div class="mx-auto flex max-w-[900px] flex-col items-center px-6 pt-40 pb-32 text-center">
	<h1 class="text-6xl tracking-tight sm:text-8xl">
		Become a <span class="font-serif text-indigo-500 italic">donor</span>
	</h1>
	<p class="mt-6 text-lg text-zinc-300">
		The money we raise goes directly into running our events and programs, covering the venues,
		materials, and resources that we use to help bring students’ ideas to life. We provide students
		with real experience, mentorship, and the chance to work directly with entrepreneurs and
		industry leaders. Every dollar donated directly goes toward supporting the next generation of
		youth entrepreneurs and giving them the opportunities they need to succeed.
	</p>
	<p class="mt-24 flex flex-col">
		<span class="text-7xl font-semibold tracking-tight tabular-nums sm:text-9xl"
			>${raised.toLocaleString('en-US')}+</span
		>
		<span class="font-serif text-5xl text-indigo-500 italic sm:text-6xl">raised</span>
	</p>
	<a href={zelle} target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg mt-12"
		>Donate with Zelle</a
	>
</div>
