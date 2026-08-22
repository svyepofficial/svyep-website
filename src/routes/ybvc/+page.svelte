<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';

	type Competition = {
		title: string;
		subtitle: string;
		description: string;
		article: string;
		video?: string;
		image?: string;
		photosUrl?: string;
	};

	const competitions: Competition[] = [
		{
			title: 'Youth Business Venture Challenge 2025',
			subtitle: '(in partnership with Berkeley Summit House)',
			description:
				'A global pitch competition for high school students. Submit your proposal for a chance to win over $10,000 in prize money and a chance to pitch live at Stanford.',
			video: 'https://drive.google.com/file/d/1JimBjldxlsyK5QZZoebvYjo1qKg8dm0s/preview',
			article: '024',
			photosUrl: 'https://lightroom.adobe.com/shares/b68ae08650da484d8485673e59c454e3'
		},
		{
			title: 'Youth Business Venture Competition 2026',
			subtitle: 'Stanford University',
			description:
				'Fifteen student startup teams gathered at Stanford to pitch ventures, receive professional feedback, and explore the future of business innovation.',
			image: '/images/articles/ybvc-2026/ArticleMainPhoto.webp',
			article: '026'
		}
	];
</script>

<svelte:head>
	<title>YBVC • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center gap-8 px-6 pt-28 pb-20 sm:pt-32">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />

	<section class="flex w-full max-w-[1120px] flex-col items-center gap-7">
		<h1
			class="text-shadow-glow-white text-center text-6xl tracking-tighter text-white select-none sm:text-7xl"
		>
			<span class="text-shadow-glow-blue font-serif text-indigo-600 italic">YBVC</span>
		</h1>

		<div class="grid w-full gap-6 lg:grid-cols-2">
			{#each competitions as competition}
				<article
					class="shadow-glow-blue-hover flex min-h-full flex-col overflow-hidden rounded-3xl border-2 border-white/50 bg-gray-800"
				>
					{#if competition.video}
						<iframe
							title={competition.title}
							src={competition.video}
							allowfullscreen
							allow="encrypted-media *;"
							class="aspect-video w-full border-2 border-white/5 object-cover"
						></iframe>
					{:else if competition.image}
						<a href="/articles/{competition.article}" class="block">
							<img
								src={competition.image}
								alt={competition.title}
								class="aspect-video w-full border-2 border-white/5 object-cover"
							/>
						</a>
					{/if}

					<div class="flex flex-1 flex-col items-center px-5 py-6 text-center sm:px-7">
						<p class="font-serif text-sm font-light tracking-tighter text-indigo-400 sm:text-base">
							{competition.subtitle}
						</p>
						<h2 class="mt-3 text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
							{competition.title}
						</h2>
						<p class="mt-4 max-w-xl text-base leading-relaxed font-light text-gray-400 sm:text-lg">
							{competition.description}
						</p>
						<div class="mt-auto flex flex-wrap justify-center gap-3 pt-6">
							{#if competition.photosUrl}
								<Button variant="secondary" target="_blank" href={competition.photosUrl}>
									Event photos
								</Button>
							{/if}
							<Button href="/articles/{competition.article}">Read More</Button>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>
</div>
