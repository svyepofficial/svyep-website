<script lang="ts">
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
</script>

<footer class="flex flex-col items-center gap-10 bg-linear-to-t from-[#120f35] to-zinc-950 pt-14">
	<div class="flex w-full flex-col items-center justify-evenly gap-y-8 md:flex-row">
		<div class="flex w-[300px] justify-center gap-4 text-gray-400">
			<a
				href="mailto:svyep.official@gmail.com"
				class="hover:text-shadow-glow-white transition hover:text-white"
				target="_blank"
			>
				<EnvelopeSimple size={30} weight="thin" />
			</a>
			<a
				href="https://www.instagram.com/svyep/"
				class="hover:text-shadow-glow-white transition hover:text-white"
				target="_blank"
			>
				<InstagramLogo size={30} weight="thin" />
			</a>
		</div>
		<a class="flex w-fit items-center gap-2" href="/">
			<img src="/logo.png" alt="" class="mb-1 size-12" />
			<div class="">
				<h1 class="font-display mt-0.5 text-3xl leading-6 tracking-tight text-white">SVYEP</h1>
				<p class=" text-[0.5rem] leading-tight font-extralight text-gray-300">
					SILICON VALLEY YOUTH <br /> ENTREPRENEURSHIP PROGRAM
				</p>
			</div>
		</a>
		<div class="flex w-[300px] justify-center gap-8 text-sm font-extralight text-gray-400">
			<div class="flex flex-col items-center gap-2">
				<a href="/" class="hover:text-shadow-glow-white transition hover:text-white">Home</a>
				<a href="/about" class="hover:text-shadow-glow-white transition hover:text-white"
					>About Us</a
				>
				<a href="/impact" class="hover:text-shadow-glow-white transition hover:text-white">Impact</a
				>
			</div>
			<div class="flex flex-col items-center gap-2">
				<a href="/events" class="hover:text-shadow-glow-white transition hover:text-white">Events</a
				>
				<a href="/articles" class="hover:text-shadow-glow-white transition hover:text-white"
					>Articles</a
				>
				<!-- <a href="/donate" class="hover:text-shadow-glow-white transition hover:text-white">Merch</a> -->
				<a href="/donate" class="hover:text-shadow-glow-white transition hover:text-white">Donate</a
				>
			</div>
			<div class="flex flex-col items-center gap-2">
				<a href="/partner" class="hover:text-shadow-glow-white transition hover:text-white"
					>Partner</a
				>
				<a href="/join" class="hover:text-shadow-glow-white transition hover:text-white">Join</a>
			</div>
		</div>
	</div>
	<div class="m-2 flex flex-col text-center text-xs text-gray-500">
		<p>© 2025 by the Silicon Valley Youth Entrepreneur Program</p>
	</div>
</footer>
