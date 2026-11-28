<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { onMount, onDestroy } from 'svelte';

	interface StarProps {
		x: number;
		y: number;
		radius: number;
		opacity: number;
		twinkleSpeed: number | null;
	}

	let {
		starDensity = 0.00015,
		allStarsTwinkle = true,
		twinkleProbability = 0.7,
		minTwinkleSpeed = 0.5,
		maxTwinkleSpeed = 1,
		class: className
	} = $props();

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;

	let stars: StarProps[] = [];
	let rafId: number | null = null;
	let resizeObserver: ResizeObserver | null = null;

	let width = 0;
	let height = 0;

	function generateStars(w: number, h: number): StarProps[] {
		const area = w * h;
		const numStars = Math.floor(area * starDensity);

		const arr: StarProps[] = Array.from({ length: numStars }, () => {
			const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;

			return {
				x: Math.random() * w,
				y: Math.random() * h,
				radius: Math.random() * 0.05 + 0.5,
				opacity: Math.random() * 0.5 + 0.5,
				twinkleSpeed: shouldTwinkle
					? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
					: null
			};
		});

		return arr;
	}

	function resizeAndRegenerate() {
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		width = Math.max(1, Math.floor(rect.width));
		height = Math.max(1, Math.floor(rect.height));
		canvas.width = width;
		canvas.height = height;
		stars = generateStars(width, height);
	}

	function render() {
		if (!ctx || !canvas) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const t = Date.now() * 0.001;
		for (const star of stars) {
			if (star.twinkleSpeed !== null) {
				star.opacity = 0.5 + Math.abs(Math.sin(t / star.twinkleSpeed) * 0.5);
			}

			ctx.beginPath();
			ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
			ctx.fill();
		}

		rafId = requestAnimationFrame(render);
	}

	onMount(() => {
		if (!canvas) return;
		ctx = canvas.getContext('2d');

		resizeAndRegenerate();

		resizeObserver = new ResizeObserver(() => {
			resizeAndRegenerate();
		});
		resizeObserver.observe(canvas);

		rafId = requestAnimationFrame(render);
	});

	onDestroy(() => {
		if (rafId !== null) cancelAnimationFrame(rafId);
		if (resizeObserver && canvas) resizeObserver.unobserve(canvas);
	});

	$effect(() => {
		if (canvas) {
			starDensity;
			allStarsTwinkle;
			twinkleProbability;
			minTwinkleSpeed;
			maxTwinkleSpeed;
			if (width > 0 && height > 0) {
				stars = generateStars(width, height);
			}
		}
	});
</script>

<canvas bind:this={canvas} class={cn('absolute inset-0 h-full w-full', className)}></canvas>
