<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import about from '$lib/data/about';
</script>

<svelte:head>
	<title>About Us • SVYEP</title>
</svelte:head>

<div class="relative flex h-full flex-col items-center gap-20 pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<div class="flex w-full max-w-[1200px] flex-col px-4 text-white">
		<h1
			class="text-shadow-glow-white font-serif text-5xl leading-loose tracking-tighter sm:text-7xl"
		>
			Our Vision<span class="text-indigo-600 text-shadow-none">.</span>
		</h1>
		<p class="text-center text-3xl font-extralight tracking-tight sm:text-justify sm:text-5xl">
			To inspire and empower the next generation of
			<span class="font-serif font-medium text-indigo-600 italic">purpose-driven</span> entrepreneurs
			who create <span class="font-serif font-medium text-indigo-600 italic">innovative</span> ventures,
			lead with <span class="font-serif font-medium text-indigo-600 italic">integrity</span>, and build
			businesses that generate lasting
			<span class="font-serif font-medium text-indigo-600 italic">social impact</span> in their
			communities and beyond.
		</p>
	</div>

	<div class="flex w-full max-w-[1200px] flex-col px-4 text-white">
		<h1
			class="text-shadow-glow-white font-serif text-5xl leading-loose tracking-tighter sm:text-7xl"
		>
			Our Mission<span class="text-indigo-600 text-shadow-none">.</span>
		</h1>
		<p class="text-center text-2xl font-extralight tracking-tight sm:text-justify sm:text-4xl">
			At SVYEP, we empower high school students to become
			<span class="font-serif font-medium text-indigo-600 italic">social entrepreneurs</span> who
			identify real-world challenges, develop
			<span class="font-serif font-medium text-indigo-600 italic">innovative and sustainable solutions</span>,
			and create <span class="font-serif font-medium text-indigo-600 italic">meaningful impact</span> in
			their communities. Through mentorship, real-world experiences, industry partnerships, and
			entrepreneurial education, we equip students with the leadership, business, and problem-solving
			skills to build ventures that create both
			<span class="font-serif font-medium text-indigo-600 italic">economic value and positive social change</span>.
		</p>
	</div>

	<div class=" flex h-full flex-col items-center text-white">
		<h1 class="text-shadow-glow-white text-center font-serif text-6xl tracking-tighter sm:text-9xl">
			Meet the Team<span class="text-indigo-600 text-shadow-none">.</span>
		</h1>
		<div class="mt-12 grid max-w-[1300px] grid-cols-1 gap-6 px-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each about.team as member}
				<div class="flex flex-col items-center gap-2 px-3">
					<div class="mb-4 size-[22rem] overflow-hidden rounded-full" style={member.wrapperStyle}>
						<img src={member.image} alt="" class="h-full w-full object-contain" style={member.imageStyle} />
					</div>
					<h1 class="font-serif text-3xl tracking-tighter">{member.name}</h1>
					<h2 class="text-base font-medium text-indigo-600">{member.position}</h2>
					<p class="mt-2 text-center text-base font-extralight text-gray-400">
						{member.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex h-full w-10/12 flex-col items-center text-white">
		<h1 class="font-serif text-6xl tracking-tighter sm:text-9xl">
			Advisors<span class="text-indigo-600">.</span>
		</h1>
		<div class="flex max-w-[1200px] flex-wrap justify-center gap-12">
			{#each about.advisors as advisor}
				<div class="flex w-80 flex-col items-center">
					<img src={advisor.image} alt="" class="mb-4 size-56 rounded-full object-cover" />
					<h1 class="font-serif text-2xl tracking-tighter">{advisor.name}</h1>
					<h2 class="font-medium text-indigo-600">{advisor.position}</h2>
					<p class="mt-4 text-justify text-sm font-extralight text-gray-400">
						{advisor.description}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mb-32 flex h-full w-10/12 flex-col items-center text-white">
		<h1 class="font-serif text-6xl tracking-tighter sm:text-9xl">
			Previous Members<span class="text-indigo-600">.</span>
		</h1>
		<div class="flex max-w-[1200px] flex-wrap justify-center gap-12">
			{#each about.previous_members as member}
				<div class="flex max-w-80 flex-col items-center px-2">
					<img src={member.image} alt="" class="mb-4 size-56 rounded-full object-cover" />
					<h1 class="font-serif text-2xl tracking-tighter">{member.name}</h1>
					<h2 class="font-medium text-indigo-600">{member.position}</h2>
				</div>
			{/each}
		</div>
	</div>
</div>
