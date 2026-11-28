<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	let counter = $state() as HTMLElement;
	let { value, class: className = '' } = $props();
	let animationController: any = null;
	let observer: IntersectionObserver | null = null;

	function startCount() {
		if (animationController) {
			animationController.cancel();
		}

		animationController = animate(0, value, {
			duration: 2,
			ease: 'circOut',
			onUpdate(latest) {
				if (counter) {
					counter.textContent = Math.round(latest).toLocaleString();
				}
			}
		});
	}

	function observeCounter() {
		if (!counter) return;

		counter.textContent = '0';

		if (observer) {
			observer.disconnect();
		}

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startCount();
						if (observer) {
							observer.disconnect();
							observer = null;
						}
					}
				});
			},
			{ threshold: 0.5 }
		);

		observer.observe(counter);
	}

	onMount(() => {
		observeCounter();

		return () => {
			if (animationController) {
				animationController.cancel();
				animationController = null;
			}
			if (observer) {
				observer.disconnect();
				observer = null;
			}
		};
	});
</script>

<div bind:this={counter} class={cn('', className)}>0</div>
