<script lang="ts">
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import Spotlight from '$lib/components/Spotlight.svelte';
	import Button from '$lib/components/Button.svelte';
	import home from '$lib/data/home';
	import CaretDown from 'phosphor-svelte/lib/CaretDown';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import AnimateNumber from '$lib/components/AnimateNumber.svelte';
	import AnimateText from '$lib/components/AnimateText.svelte';
	import Marquee from '$lib/components/Marquee.svelte';

	let firstScroll: number = $state(0);
	let secondScroll = $derived(firstScroll - 300);
	let thirdScroll = $derived(secondScroll - 400);
	let fourthScroll = $derived(thirdScroll - 400);
	let fifthScoll = $derived(fourthScroll - 200);

	let imageScroll = $derived(firstScroll - 1900);

	const images = [
		{
			class:
				'shadow-glow-gray hover:shadow-glow-blue absolute w-[250px] -rotate-12 rounded-3xl opacity-30 transition-opacity duration-500 hover:opacity-100',
			src: '/images/home/S201.webp',
			top: -200,
			left: -250
		},
		{
			class:
				'shadow-glow-gray hover:shadow-glow-blue absolute w-[400px] rounded-3xl opacity-30 transition-opacity duration-500 hover:opacity-100',
			src: '/images/home/S202.webp',
			top: -250,
			left: 120
		},
		{
			class:
				'shadow-glow-gray hover:shadow-glow-blue absolute w-[200px] rotate-12 rounded-3xl opacity-30 transition-opacity duration-500 hover:opacity-100',
			src: '/images/home/S203.webp',
			top: -150,
			left: 650
		},
		{
			class:
				'shadow-glow-gray hover:shadow-glow-blue absolute w-[500px] -rotate-12 rounded-3xl opacity-30 transition-opacity duration-500 hover:opacity-100',
			src: '/images/home/S204.webp',
			top: 300,
			left: 280
		},
		{
			class:
				'shadow-glow-gray hover:shadow-glow-blue absolute w-[220px] rotate-6 rounded-3xl opacity-30 transition-opacity duration-500 hover:opacity-100',
			src: '/images/home/S205.webp',
			top: 200,
			left: -100
		}
	];

	const maxScroll = 1000;

	function lerp(start: number, end: number, t: number) {
		return start + (end - start) * t;
	}
</script>

<svelte:head>
	<title>Home • SVYEP</title>
</svelte:head>

<svelte:window bind:scrollY={firstScroll as number} />

<StarsBackground starDensity={0.00003} class="fixed -z-10" />
<main class="relative h-full">
	<Spotlight />
	<div
		class="my-[100px] flex flex-col flex-wrap items-center justify-center xl:my-[120px] xl:flex-row"
	>
		<div
			class="mx-auto h-[400px] w-[400px] sm:mx-0 sm:h-[600px] sm:w-[600px] xl:h-[700px] xl:w-[700px]"
		>
			<DotLottieSvelte src="/animation.json" autoplay segment={[0, 209]} />
		</div>
		<div
			class="-mt-10 mb-20 flex w-fit flex-col items-center justify-center gap-12 sm:-mt-20 sm:ml-10 xl:mt-20 xl:mr-36 xl:-ml-16"
		>
			<div class="flex flex-col items-start sm:items-center xl:items-end">
				<!-- <h1
				class="text-shadow-glow-white text-right text-7xl leading-[4.5rem] tracking-tighter text-white"
				>
				Empowering <br /> the
				<span class="text-shadow-glow-blue font-serif text-indigo-600 italic">future</span>
				of <br /> entrepreneurs.
				</h1> -->
				<AnimateText
					class="text-shadow-glow-white text-right text-5xl tracking-tighter text-white sm:text-7xl"
				>
					Empowering
				</AnimateText>
				<div class="flex gap-4 text-5xl sm:text-7xl sm:leading-[4.5rem]">
					<AnimateText class="text-shadow-glow-white text-right tracking-tighter text-white">
						the
					</AnimateText>
					<AnimateText class="text-shadow-glow-blue font-serif text-indigo-600 italic"
						>future</AnimateText
					>
					<AnimateText class="text-shadow-glow-white text-right tracking-tighter text-white">
						of
					</AnimateText>
				</div>
				<AnimateText
					class="text-shadow-glow-white text-right text-5xl tracking-tighter text-white sm:text-7xl sm:leading-[4.5rem]"
				>
					entrepreneurs.
				</AnimateText>
			</div>
			<Button href="/join" size="lg">Get started</Button>
		</div>
	</div>
</main>

<!-- section-1 -->
<section class="relative mt-40 flex h-full flex-col items-center gap-44 sm:mt-0 sm:gap-36">
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<div
		class="absolute top-0 -left-[500px] -z-20 h-full w-[700px] rounded-full bg-radial from-[#18153b]
		to-zinc-950 to-75% blur-3xl"
	></div>
	<div
		class="absolute -right-[500px] -z-20 h-full w-[700px] rounded-full bg-radial from-[#18153b]
		to-zinc-950 to-75% blur-3xl"
	></div>
	<div
		class="flex flex-col flex-wrap items-center gap-4 lg:flex-row"
		style="transform: translateX({Math.max(1000 - 2 * (firstScroll ?? 0), 0)}px)"
	>
		<div>
			<h1
				class=" text-shadow-glow-white flex w-fit text-right text-7xl font-black tracking-tighter text-white sm:text-[10rem] lg:w-[450px] lg:leading-32"
			>
				<AnimateNumber value={home.statistics.members} />+
			</h1>
			<h2
				class="w-full text-center font-serif text-5xl font-medium tracking-tighter text-indigo-600 italic sm:text-7xl lg:text-right"
			>
				members.
			</h2>
		</div>
		<p class="max-w-[500px] px-2 text-center text-sm text-gray-400 sm:text-base lg:text-left">
			<span class="text-white"
				>Our <span class="bg-indigo-700 font-serif text-white italic">members</span> are entrepreneurs,
				professionals, organizations, and most importantly, students, who are committed to growing through
				connection, collaboration, and shared opportunities.</span
			> By joining, they gain access to exclusive events, valuable resources, and a community that supports
			their business journey.
		</p>
	</div>
	<img
		src="/images/home/stats/Members.webp"
		alt=""
		class="shadow-glow-blue absolute top-[200px] left-0 -z-50 h-[250px] rotate-[-10deg] rounded-3xl opacity-30 transition-all xl:opacity-80 2xl:left-36"
	/>
	<div
		class="flex flex-col items-center gap-1 lg:gap-4"
		style="transform: translateX({Math.min(-1000 + 2 * (secondScroll ?? 0), 0)}px)"
	>
		<h1
			class="text-shadow-glow-white flex text-7xl font-black tracking-tighter text-white sm:text-[10rem] lg:leading-32"
		>
			$<AnimateNumber value={home.statistics.raised} />+
		</h1>
		<div class="flex flex-col items-center gap-4 lg:flex-row">
			<h2
				class="font-serif text-5xl font-medium tracking-tighter text-indigo-600 italic sm:text-7xl
			"
			>
				raised.
			</h2>
			<p class="max-w-[500px] px-2 text-center text-sm text-gray-400 sm:text-base lg:text-left">
				<span class="text-white"
					>We've <span class="bg-indigo-700 font-serif text-white italic">raised</span>
					${home.statistics.raised} through investors and partnerships, demonstrating the strength and
					trust of our growing network.</span
				> This level of backing and funding reflects the confidence our partners have in our mission
				and the value we deliver. It shows that our community believes in what we're building and the
				impact we have on bright minds of the future.
			</p>
		</div>
	</div>
	<img
		src="/images/home/stats/Money Raised.webp"
		alt=""
		class="shadow-glow-blue absolute top-[650px] right-0 -z-50 h-[250px] rotate-[10deg] rounded-3xl opacity-50 transition-all sm:top-[500px] 2xl:right-36 2xl:opacity-80"
	/>
	<div
		class="flex flex-col items-center gap-4"
		style="transform: translateX({Math.max(1000 - 2 * (thirdScroll ?? 0), 0)}px)"
	>
		<div class="flex flex-col items-center sm:gap-4 lg:flex-row">
			<h1
				class="flex text-7xl font-black tracking-tighter text-white sm:text-[10rem] lg:w-[630px] lg:leading-32"
			>
				<AnimateNumber value={home.statistics.impacted_students} />+
			</h1>
			<h2
				class="w-full text-center font-serif text-5xl leading-16 font-medium tracking-tighter text-indigo-600 italic lg:w-[260px] lg:text-7xl"
			>
				students & attendees reached.
			</h2>
		</div>
		<p class="max-w-[500px] px-2 text-center text-sm text-gray-400 lg:text-base">
			<span class="text-white">
				This is the total <span class="bg-indigo-700 font-serif text-white italic">reach</span> of the
				events and pitch competitions we've hosted and co-hosted — the students, professionals, and
				audiences we've connected to opportunity.
			</span> Most notably this year, SVYEP co-hosted the largest pitch event in Silicon Valley, drawing
			thousands of attendees, 350+ VCs, and 100+ investors.
		</p>
	</div>
	<img
		src="/images/home/stats/ImpactedStudents.webp"
		alt=""
		class="shadow-glow-blue absolute top-[1050px] left-0 -z-50 h-[250px] rotate-[-10deg] rounded-3xl opacity-50 transition-all sm:top-[1000px] 2xl:left-36 2xl:opacity-80"
	/>
	<div
		class="flex flex-col-reverse items-center gap-8 lg:flex-row"
		style="transform: translateX({Math.min(-1000 + 2 * (fourthScroll ?? 0), 0)}px)"
	>
		<p class="max-w-[500px] px-2 text-center text-sm text-gray-400 lg:text-right lg:text-base">
			<span class="text-white"
				>We connect students with impactful <span class="bg-indigo-700 font-serif text-white italic"
					>internship</span
				>
				opportunities at leading AI, tech, and innovative companies</span
			>. Through hands-on experience, mentorship, and real-world projects, students gain valuable
			skills and insights that prepare them for careers in various industries.
		</p>
		<div class="flex flex-col items-center">
			<h1
				class="w-ful flex text-center text-7xl font-black tracking-tighter text-white sm:text-[10rem] lg:leading-32"
			>
				<AnimateNumber value={home.statistics.internships} />+
			</h1>
			<h2
				class="font-serif text-5xl font-medium tracking-tighter text-indigo-600 italic lg:text-7xl"
			>
				internships.
			</h2>
		</div>
	</div>
	<img
		src="/images/home/stats/Internships.webp"
		alt=""
		class="shadow-glow-blue absolute top-[1450px] right-0 -z-50 h-[250px] rotate-[10deg] rounded-3xl opacity-50 transition-all sm:top-[1400px] 2xl:right-36 2xl:opacity-80"
	/>
	<div
		class="flex flex-col items-center"
		style="transform: translateX({Math.max(1000 - 2 * (fifthScoll ?? 0), 0)}px)"
	>
		<div class="flex items-center gap-8">
			<h1
				class="flex w-full text-center text-7xl font-black tracking-tighter text-white sm:w-[250px] sm:text-[10rem] sm:leading-32"
			>
				<AnimateNumber value={home.statistics.businesses_worked_with} />+
			</h1>
			<p class="hidden max-w-[500px] px-2 text-sm text-gray-400 lg:block lg:text-base">
				<span class="text-white"
					>We are committed to <span class="bg-indigo-700 font-serif text-white italic"
						>partnering</span
					> with various businesses and companies who have assisted in our mission of helping the younger
					generation.</span
				> From being invited to dinner by companies such as Google Fiber to partnering and hosting monumental
				events, SVYEP is thankful to all organizations we have previously worked with and continue to
				grow alongside.
			</p>
		</div>
		<h2
			class="text-center font-serif text-5xl font-semibold tracking-tighter text-indigo-600 italic lg:text-7xl"
		>
			businesses worked with.
		</h2>
		<p
			class="visible mt-8 max-w-[500px] px-2 text-center text-sm text-gray-400 lg:invisible lg:text-base"
		>
			<span class="text-white"
				>We are committed to <span class="bg-indigo-700 font-serif text-white italic"
					>partnering</span
				> with various businesses and companies who have assisted in our mission of helping the younger
				generation.</span
			> From being invited to dinner by companies such as Google Fiber to partnering and hosting monumental
			events, SVYEP is thankful to all organizations we have previously worked with and continue to grow
			alongside.
		</p>
	</div>
</section>

<!-- section-2 -->
<section class="relative flex items-center justify-center py-[400px]">
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<div class="relative flex flex-col items-center gap-10">
		<div
			class="absolute -top-48 size-[600px] rounded-full bg-radial from-[#18153b]
		to-zinc-950 to-75% blur-3xl"
		></div>
		<h1
			class="text-shadow-glow-white z-10 text-center font-serif text-4xl tracking-tighter text-white italic sm:w-[600px] sm:text-6xl"
		>
			“To unite <span class="text-shadow-glow-blue font-sans font-medium text-indigo-600"
				>today's</span
			>
			youth with
			<span class="text-shadow-glow-blue font-sans font-medium text-indigo-600">tomorrow's</span>
			social entrepreneurs”
		</h1>
		<Button variant="secondary" href="/about" class="z-10">Learn about us</Button>
		<div>
			{#each images as img}
				<img
					src={img.src}
					alt=""
					class={img.class}
					style="
				top: {lerp(0, img.top, Math.min(imageScroll / maxScroll, 1))}px;
				left: {lerp(0, img.left, Math.min(imageScroll / maxScroll, 1))}px;
			"
				/>
			{/each}
			<!-- <img
				src="/images/home/S201.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute -top-[200px] -left-[250px] w-[250px] -rotate-12 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S202.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute -top-[250px] left-[120px] w-[400px] rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S203.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute -top-[150px] left-[650px] w-[200px] rotate-12 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S204.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute top-[300px] left-[280px] w-[500px] -rotate-12 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S205.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute top-[200px] -left-[100px] w-[220px] rotate-6 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/> -->
		</div>
	</div>
</section>

<!-- section-3 -->
<section class="relative flex flex-col items-center gap-8">
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h1
		class="mb-20 max-w-[1000px] px-2 text-center text-7xl tracking-tighter text-white sm:text-9xl sm:leading-24"
	>
		We offer resources for
		<span
			class="font-serif italic underline decoration-indigo-600 decoration-[5px] underline-offset-8 text-shadow-none"
			>your</span
		> success.
	</h1>
	<!-- <div class="flex flex-col items-center">
		<AnimateText class="text-center text-6xl tracking-tighter text-white sm:text-9xl sm:leading-24"
			>We offer resources for</AnimateText
		>
		<div class="flex gap-6">
			<AnimateText
				class="font-serif text-6xl tracking-tighter text-white italic underline decoration-indigo-600 decoration-[5px] underline-offset-8 text-shadow-none sm:text-9xl sm:leading-24"
				>your</AnimateText
			>
			<AnimateText
				class="text-center text-6xl tracking-tighter text-white sm:text-9xl sm:leading-24"
				>success</AnimateText
			>
		</div>
	</div> -->
	<div class="flex flex-wrap justify-center">
		<div class="m-8 flex flex-col">
			<div class="z-10 flex flex-col sm:flex-row">
				<h1
					class="text-center font-sans text-[7rem] leading-24 font-bold tracking-tighter text-white text-shadow-lg sm:text-[9rem] sm:leading-normal"
				>
					01
				</h1>
				<h2
					class="text-center font-serif text-4xl font-semibold text-indigo-600 sm:mt-16 sm:ml-4 sm:text-5xl"
				>
					CONNECTIONS
				</h2>
			</div>
			<div class=" flex flex-col items-center sm:-mt-32 sm:flex-row">
				<img
					src="/images/home/S301.webp"
					alt=""
					class="my-4 ml-1 h-auto w-[200px] rounded-3xl sm:my-0"
				/>
				<ul class="ml-10 list-disc text-lg leading-relaxed text-gray-400 sm:ml-16 sm:text-xl">
					<li>In-person speaker events</li>
					<li>Networking sessions</li>
					<li>Zoom webinars and workshops</li>
				</ul>
			</div>
		</div>
		<div class="m-8 flex flex-col items-center sm:items-end">
			<div
				class="z-10 flex flex-col-reverse items-center leading-24 sm:flex-row sm:items-start sm:leading-normal"
			>
				<h2 class="font-serif text-4xl font-semibold text-indigo-600 sm:mt-16 sm:mr-4 sm:text-5xl">
					EXPERIENCE
				</h2>
				<h1
					class="font-sans text-[7rem] font-bold tracking-tighter text-white text-shadow-lg sm:text-[9rem]"
				>
					02
				</h1>
			</div>
			<div class="flex flex-col-reverse items-center sm:-mt-32 sm:flex-row">
				<ul class="w-[300px] list-disc text-lg leading-relaxed text-gray-400 sm:text-xl">
					<li>Paid internships & jobs</li>
					<li>Volunteer opportunities @ local startups in the Silicon Valley</li>
					<li>Work alongside industry professionals</li>
				</ul>
				<img
					src="/images/home/S302.webp"
					alt=""
					class="my-4 h-auto w-[200px] rounded-3xl sm:my-0 sm:mr-1"
				/>
			</div>
		</div>
		<div class="m-8 flex flex-col items-center">
			<h1
				class="z-10 font-sans text-[7rem] leading-24 font-bold tracking-tighter text-white text-shadow-lg sm:text-[9rem] sm:leading-44"
			>
				03
			</h1>
			<h2 class="font-serif text-4xl font-semibold text-indigo-600 sm:text-5xl">EDUCATION</h2>
			<img src="/images/home/S303.webp" alt="" class=" h-auto w-[350px] rounded-3xl sm:w-[350px]" />
			<ul
				class="mt-10 w-[300px] list-disc text-lg leading-relaxed text-gray-400 sm:w-[350px] sm:text-xl"
			>
				<li>Engage with mentions & peers in student-led workshops</li>
				<li>Access our nationwide network of schools</li>
			</ul>
		</div>
	</div>
</section>

<!-- section-4 -->
<section class="relative my-32 flex flex-col items-center gap-12">
	<Marquee class="mb-10 [--duration:60s]">
		{#each new Array(8) as item, i}
			<img
				src="/images/home/top-carousel/{i}.webp"
				alt=""
				class=" h-[300px] rounded-3xl select-none"
			/>
		{/each}
	</Marquee>
	<h1
		class=" text-shadow-glow-white text-center text-7xl tracking-tighter text-white sm:text-9xl sm:leading-24"
	>
		Get started <span class="text-shadow-glow-blue font-bold text-indigo-600">TODAY.</span>
	</h1>
	<Button href="/join" size="lg">Join Us</Button>
	<Marquee class="mt-10 [--duration:60s]" reverse={true}>
		{#each new Array(7) as item, i}
			<img
				src="/images/home/bottom-carousel/{i}.webp"
				alt=""
				class=" h-[300px] rounded-3xl select-none"
			/>
		{/each}
	</Marquee>
</section>
