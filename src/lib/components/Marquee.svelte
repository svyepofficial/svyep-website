<script lang="ts">
	import type { Snippet } from 'svelte';

	let { reverse = false, children }: { reverse?: boolean; children: Snippet } = $props();
</script>

<!-- Two copies so the strip loops seamlessly; the second is hidden from assistive tech. -->
<div class="group flex gap-(--gap) overflow-hidden [--duration:60s] [--gap:1rem]">
	{#each [false, true] as hidden (hidden)}
		<div
			aria-hidden={hidden || undefined}
			class={[
				'animate-marquee flex shrink-0 gap-(--gap) group-hover:[animation-play-state:paused]',
				reverse && '[animation-direction:reverse]'
			]}
		>
			{@render children()}
		</div>
	{/each}
</div>
