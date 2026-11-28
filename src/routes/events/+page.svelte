<script lang="ts">
	import events from '$lib/data/events';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Events"
	description="Pitch competitions, VC summits, and speaker events hosted and co-hosted by SVYEP, from Stanford to the Bay Area Founders Club."
/>

<div class="mx-auto flex max-w-[1400px] flex-col items-center px-6 pt-40 pb-24 sm:px-10">
	<h1 class="text-center text-7xl tracking-tighter sm:text-9xl">
		Featured <span class="font-serif tracking-tighter text-indigo-500 italic">SVYEP</span> events
	</h1>
	<ul class="mt-16 flex w-full flex-col divide-y divide-white/8">
		{#each events as event, i (event.article)}
			<li class="grid items-center gap-8 py-16 lg:grid-cols-2 lg:gap-16">
				<div class={['flex flex-col items-start gap-4', i % 2 === 1 && 'lg:order-2']}>
					{#if event.subtitle}
						<p class="font-serif text-lg tracking-tighter text-indigo-400">{event.subtitle}</p>
					{/if}
					<h2 class="text-5xl font-semibold tracking-tighter md:text-6xl">{event.title}</h2>
					<p class="pt-4 text-2xl leading-relaxed font-light text-zinc-400">{event.description}</p>
					<a href="/articles/{event.article}" class="btn btn-primary btn-lg mt-4">Read more</a>
				</div>
				<img
					src={event.image}
					alt=""
					width="1200"
					height="800"
					loading={i === 0 ? 'eager' : 'lazy'}
					class="aspect-[3/2] w-full rounded-3xl object-cover"
				/>
			</li>
		{/each}
	</ul>
</div>
