<script lang="ts">
	import events from '$lib/data/events';
	import Seo from '$lib/components/Seo.svelte';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';

	// Oldest edition first.
	const competitions = events.filter((event) => event.ybvc).reverse();
</script>

<Seo
	title="YBVC"
	description="The Youth Business Venture Competition — a global student pitch competition hosted by SVYEP at Stanford University."
	image="/images/articles/ybvc-2026/ArticleMainPhoto.webp"
/>

<div class="mx-auto flex max-w-[1120px] flex-col items-center gap-10 px-6 pt-40 pb-24 sm:pt-44">
	<h1 class="text-center text-5xl tracking-tight sm:text-7xl">
		Youth Business Venture <span class="font-serif text-indigo-500 italic">Competition</span>
	</h1>
	<ul class="grid w-full gap-6 lg:grid-cols-2">
		{#each competitions as competition (competition.article)}
			<li class="card flex flex-col overflow-hidden">
				<a href="/articles/{competition.article}" tabindex="-1">
					<img
						src={competition.image}
						alt=""
						width="1200"
						height="675"
						class="aspect-video w-full object-cover"
					/>
				</a>
				<div class="flex flex-1 flex-col items-center gap-3 px-6 py-8 text-center sm:px-8">
					<p class="font-serif text-indigo-400">{competition.subtitle}</p>
					<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">{competition.title}</h2>
					<p class="max-w-xl text-lg leading-relaxed text-zinc-400">{competition.description}</p>
					<div class="mt-auto flex flex-wrap justify-center gap-3 pt-4">
						{#if competition.photosUrl}
							<a
								href={competition.photosUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-secondary">Event photos <ArrowUpRight size={16} /></a
							>
						{/if}
						<a href="/articles/{competition.article}" class="btn btn-primary">Read more</a>
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<p class="text-center text-lg text-zinc-400">
		For more information about the competition, visit
		<a href="https://ybvcompetition.org" target="_blank" rel="noopener noreferrer" class="link"
			>ybvcompetition.org</a
		>.
	</p>
</div>
