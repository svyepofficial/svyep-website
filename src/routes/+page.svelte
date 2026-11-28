<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import { benefits, stats } from '$lib/data/home';

	// 4-column collage, every photo spans two row tracks.
	const collage = [
		{ src: '/images/home/S202.webp', width: 2048, height: 972, class: 'col-span-3' },
		{ src: '/images/home/S205.webp', width: 685, height: 913, class: '' },
		{ src: '/images/home/S201.webp', width: 552, height: 683, class: '' },
		{ src: '/images/home/S203.webp', width: 307, height: 483, class: '' },
		{ src: '/images/home/S204.webp', width: 2545, height: 950, class: 'col-span-2' }
	];

	const offerings = [
		{
			title: 'Connections',
			image: { src: '/images/home/S301.webp', width: 432, height: 537 },
			items: ['In-person speaker events', 'Networking sessions', 'Zoom webinars and workshops']
		},
		{
			title: 'Experience',
			image: { src: '/images/home/S302.webp', width: 432, height: 534 },
			items: [
				'Paid internships and jobs',
				'Volunteer opportunities at local startups in Silicon Valley',
				'Work alongside industry professionals'
			]
		},
		{
			title: 'Education',
			image: { src: '/images/home/S303.webp', width: 866, height: 488 },
			items: [
				'Engage with mentors and peers in student-led workshops',
				'Access our nationwide network of schools'
			]
		}
	];

	const topStrip = [
		[1638, 1093],
		[1141, 760],
		[1024, 683],
		[1141, 760],
		[1569, 1046],
		[1600, 1067],
		[1141, 760],
		[1221, 814]
	];
	const bottomStrip = [
		[803, 536],
		[932, 621],
		[800, 533],
		[803, 536],
		[1129, 847],
		[1512, 1134],
		[1456, 971]
	];
</script>

<Seo
	title="Home"
	description="SVYEP is a student-led community that helps high school students become social entrepreneurs — through mentorship, industry connections, pitch competitions, and real-world entrepreneurial education."
/>

<!-- Hero -->
<section
	class="mx-auto flex min-h-svh max-w-[1400px] flex-col items-center justify-center gap-8 px-6 pt-28 pb-16 xl:flex-row xl:gap-8"
>
	<img
		src="/images/home/hero-globe.webp"
		alt=""
		width="1225"
		height="1225"
		fetchpriority="high"
		class="hero-in w-[400px] max-w-full sm:w-[600px] xl:w-[700px]"
	/>
	<div
		class="flex max-w-[520px] flex-col items-center gap-10 text-center xl:items-end xl:text-right"
	>
		<h1 class="text-5xl leading-[1.05] font-normal tracking-tighter sm:text-7xl">
			Empowering the <span class="font-serif tracking-tighter text-indigo-500 italic">future</span> of
			entrepreneurs
		</h1>
		<p class="text-lg text-zinc-300">
			A community for high school students who want to use business as a force for good — connecting
			them to the mentors, internships, and ideas to turn ambition into real-world impact.
		</p>
		<a href="/join" class="btn btn-primary btn-lg">Get started</a>
	</div>
</section>

<!-- What you get -->
<section class="mx-auto flex max-w-[1000px] flex-col items-center gap-12 px-6 py-24">
	<div class="flex max-w-[760px] flex-col items-center gap-4 text-center">
		<h2 class="text-4xl tracking-tighter sm:text-6xl">
			What you get as a <span class="font-serif tracking-tighter text-indigo-500 italic"
				>member</span
			>
		</h2>
		<p class="text-lg text-zinc-300">
			SVYEP is a community for high school students. Members get hands-on experience and a network
			built to help them launch ventures that matter.
		</p>
	</div>
	<ul class="grid w-full gap-4 md:grid-cols-3">
		{#each benefits as benefit (benefit.title)}
			<li class="card flex flex-col items-center gap-3 p-6 text-center">
				<benefit.icon size={50} weight={benefit.weight} />
				<h3 class="text-lg leading-5 font-medium">{benefit.title}</h3>
				<p class="text-sm text-zinc-400">{benefit.description}</p>
			</li>
		{/each}
	</ul>
	<a href="/join" class="btn btn-primary btn-lg">Become a member</a>
</section>

<!-- By the numbers -->
<section aria-labelledby="numbers" class="mx-auto max-w-[1440px] px-6 py-24">
	<h2 id="numbers" class="sr-only tracking-tighter">SVYEP by the numbers</h2>
	<div class="flex flex-col gap-24 sm:gap-32">
		{#each stats as stat, i (stat.label)}
			<div
				class={[
					'grid items-center gap-8 lg:gap-16',
					i % 2 === 1 ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'
				]}
			>
				<div class={['flex flex-col gap-6', i % 2 === 1 && 'lg:order-2']}>
					<p class="flex flex-col">
						<span
							class="text-[4rem] leading-none font-black tracking-tighter tabular-nums sm:text-8xl md:text-9xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
							>{stat.figure}</span
						>
						<span
							class="font-serif text-5xl font-medium tracking-tighter text-indigo-500 italic sm:text-7xl"
							>{stat.label}</span
						>
					</p>
					<p class="max-w-[520px] text-zinc-400">
						<span class="text-zinc-100">{stat.lead}</span>
						{stat.body}
					</p>
				</div>
				<img
					src={stat.image.src}
					alt=""
					width={stat.image.width}
					height={stat.image.height}
					loading="lazy"
					class="aspect-[3/2] w-full rounded-3xl object-cover"
				/>
			</div>
		{/each}
	</div>
</section>

<!-- Mission quote -->
<section class="mx-auto flex max-w-[1100px] flex-col items-center gap-10 px-6 py-32">
	<blockquote
		class="max-w-[720px] text-center font-serif text-4xl leading-tight tracking-tighter italic sm:text-6xl"
	>
		“To unite <span class="font-sans font-medium text-indigo-500 not-italic">today’s</span> youth
		with
		<span class="font-sans font-medium text-indigo-500 not-italic">tomorrow’s</span> social entrepreneurs”
	</blockquote>
	<a href="/about" class="btn btn-secondary">Learn about us</a>
	<div class="mt-6 grid w-full auto-rows-[100px] grid-cols-4 gap-3 sm:auto-rows-[180px] sm:gap-4">
		{#each collage as photo (photo.src)}
			<img
				src={photo.src}
				alt=""
				width={photo.width}
				height={photo.height}
				loading="lazy"
				class={['row-span-2 h-full w-full rounded-2xl object-cover', photo.class]}
			/>
		{/each}
	</div>
</section>

<!-- What we offer -->
<section class="mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-6 py-24">
	<div class="flex max-w-[900px] flex-col items-center gap-6 text-center">
		<h2 class="text-6xl leading-[1.05] tracking-tighter sm:text-9xl sm:leading-[0.95]">
			We offer resources for <span class="font-serif tracking-tighter text-indigo-500 italic"
				>your</span
			> success
		</h2>
		<p class="max-w-[640px] text-lg text-zinc-300">
			Everything we offer points the same direction — giving students the connections, experience,
			and education to build ventures that make a real difference in their communities.
		</p>
	</div>
	<ol class="grid w-full gap-12 md:grid-cols-3 md:gap-8">
		{#each offerings as offering, i (offering.title)}
			<li class="flex flex-col gap-5">
				<div class="flex flex-col">
					<span
						class="text-[7rem] leading-none font-bold tracking-tighter tabular-nums sm:text-[9rem]"
						>0{i + 1}</span
					>
					<h3
						class="font-serif text-4xl font-semibold tracking-tighter text-indigo-500 sm:text-5xl"
					>
						{offering.title}
					</h3>
				</div>
				<img
					src={offering.image.src}
					alt=""
					width={offering.image.width}
					height={offering.image.height}
					loading="lazy"
					class="aspect-[4/3] w-full rounded-2xl object-cover"
				/>
				<ul class="flex list-disc flex-col gap-2 pl-5 text-lg text-zinc-300 sm:text-xl">
					{#each offering.items as item (item)}<li>{item}</li>{/each}
				</ul>
			</li>
		{/each}
	</ol>
</section>

<!-- Call to action -->
<section class="flex flex-col items-center gap-12 py-24">
	<Marquee>
		{#each topStrip as [width, height], i (i)}
			<img
				src="/images/home/top-carousel/{i}.webp"
				alt=""
				{width}
				{height}
				loading="lazy"
				class="h-[220px] w-auto rounded-3xl sm:h-[300px]"
			/>
		{/each}
	</Marquee>
	<h2 class="px-6 text-center text-7xl tracking-tighter sm:text-9xl">
		Get started <span class="font-serif tracking-tighter text-indigo-500 italic">today</span>
	</h2>
	<a href="/join" class="btn btn-primary btn-lg">Join as a student</a>
	<div class="flex flex-col items-center gap-3">
		<p class="text-sm text-zinc-400">Not a student?</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a href="/partner" class="btn btn-secondary">Partner with us</a>
			<a href="/donate" class="btn btn-secondary">Donate</a>
		</div>
	</div>
	<Marquee reverse>
		{#each bottomStrip as [width, height], i (i)}
			<img
				src="/images/home/bottom-carousel/{i}.webp"
				alt=""
				{width}
				{height}
				loading="lazy"
				class="h-[220px] w-auto rounded-3xl sm:h-[300px]"
			/>
		{/each}
	</Marquee>
</section>

<style>
	.hero-in {
		animation: hero-in 700ms var(--ease-out) both;
	}
	@keyframes hero-in {
		from {
			opacity: 0;
			transform: scale(0.96);
		}
	}
</style>
