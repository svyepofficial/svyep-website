<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';
	let { children, class: className = '' } = $props();

	let text = $state() as HTMLElement;
	let hasAnimated = $state(false);

	onMount(() => {
		const words = text.textContent.trim().split(' ');
		text.innerHTML = words.map((word) => `<span class="word opacity-0">${word}</span>`).join(' ');

		// animate(
		// 	'#title .word',
		// 	{ opacity: [0, 1], y: [0, 30] },
		// 	{ delay: stagger(0.15), duration: 0.5, ease: 'easeOut' }
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						hasAnimated = true;

						// Start animation
						animate(
							'#title .word',
							{ opacity: [0, 1] },
							{
								delay: stagger(0.15),
								duration: 0.5,
								ease: 'easeOut'
							}
						);

						// Optionally unobserve after animation
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.5,
				rootMargin: '0px 0px 20% 0px' // Trigger slightly before fully in view
			}
		);

		observer.observe(text);

		// Cleanup
		return () => {
			observer.disconnect();
		}; // );
	});
</script>

<h1 bind:this={text} class={cn('', className)} id="title">{@render children()}</h1>
