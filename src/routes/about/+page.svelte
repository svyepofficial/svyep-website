<script lang="ts">
	import about from '$lib/data/about';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="About Us"
	description="Meet the students behind SVYEP. Our vision, our mission, and the team building a platform for the next generation of purpose-driven entrepreneurs."
/>

<div class="flex flex-col items-center gap-24 px-6 pt-40 pb-32 sm:gap-32 sm:pt-48">
	<h1 class="sr-only">About SVYEP</h1>

	<section class="flex w-full max-w-[1100px] flex-col gap-6">
		<h2 class="font-serif text-4xl sm:text-6xl">Our vision</h2>
		<p class="text-xl leading-relaxed text-zinc-300 sm:text-3xl sm:leading-snug">
			To inspire and empower the next generation of purpose-driven entrepreneurs who create
			innovative ventures, lead with integrity, and build businesses that generate lasting
			<span class="font-serif text-indigo-400 italic">social impact</span> in their communities and beyond.
		</p>
	</section>

	<section class="flex w-full max-w-[1100px] flex-col gap-6">
		<h2 class="font-serif text-4xl sm:text-6xl">Our mission</h2>
		<p class="text-lg leading-relaxed text-zinc-300 sm:text-2xl sm:leading-snug">
			At SVYEP, we empower high school students to become social entrepreneurs who identify
			real-world challenges, develop innovative and sustainable solutions, and create meaningful
			impact in their communities. Through mentorship, real-world experiences, industry
			partnerships, and entrepreneurial education, we equip students with the leadership, business,
			and problem-solving skills to build ventures that create both
			<span class="font-serif text-indigo-400 italic"
				>economic value and positive social change</span
			>.
		</p>
	</section>

	<section class="flex w-full max-w-[1300px] flex-col items-center gap-16">
		<h2 class="text-center font-serif text-5xl sm:text-8xl">Meet the team</h2>
		<ul class="grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
			{#each about.team as member (member.name)}
				<li class="flex flex-col items-center gap-2 text-center">
					<div
						class="mb-4 aspect-square w-full max-w-[22rem] overflow-hidden rounded-full bg-zinc-900"
					>
						<img
							src={member.image}
							alt=""
							loading="lazy"
							class="size-full object-contain"
							style={member.imageStyle}
						/>
					</div>
					<h3 class="font-serif text-3xl">{member.name}</h3>
					<p class="font-medium text-indigo-400">{member.position}</p>
					{#if member.description}
						<p class="mt-2 max-w-[24rem] text-zinc-400">{member.description}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	<section class="flex w-full max-w-[1300px] flex-col items-center gap-16">
		<h2 class="text-center font-serif text-5xl sm:text-8xl">Advisors</h2>
		<ul class="flex flex-wrap justify-center gap-x-8 gap-y-16">
			{#each about.advisors as advisor (advisor.name)}
				<li class="flex w-full max-w-72 flex-col items-center text-center">
					<img
						src={advisor.image}
						alt=""
						loading="lazy"
						class="mb-4 size-56 rounded-full bg-zinc-900 object-cover"
					/>
					<h3 class="font-serif text-2xl">{advisor.name}</h3>
					<p class="font-medium text-indigo-400">{advisor.position}</p>
					{#if advisor.description}
						<p class="mt-4 text-sm text-zinc-400">{advisor.description}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	<section class="flex w-full max-w-[1200px] flex-col items-center gap-16">
		<h2 class="text-center font-serif text-5xl sm:text-8xl">Previous members</h2>
		<ul class="flex flex-wrap justify-center gap-x-12 gap-y-14">
			{#each about.previous_members as member (member.name)}
				<li class="flex max-w-80 flex-col items-center px-2 text-center">
					<img
						src={member.image}
						alt=""
						loading="lazy"
						class="mb-4 size-56 rounded-full bg-zinc-900 object-cover"
					/>
					<h3 class="font-serif text-2xl">{member.name}</h3>
					<p class="font-medium text-indigo-400">{member.position}</p>
					{#if member.education}
						<p class="mt-1 text-sm text-zinc-400">{member.education}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</div>
