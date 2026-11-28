<script lang="ts">
	import { animate } from 'motion';

	let spotlightParent = $state() as HTMLElement;
	let spotlightLeft = $state() as HTMLElement;
	let spotlightRight = $state() as HTMLElement;

	let {
		gradientFirst = 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)',
		gradientSecond = 'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)',
		gradientThird = 'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)',
		translateY = -350,
		width = 560,
		height = 1380,
		smallWidth = 240,
		duration = 7,
		xOffset = 100
	} = $props();

	$effect(() => {
		animate(spotlightParent, { opacity: [0, 1] }, { duration: 1.5 });
		animate(
			spotlightLeft,
			{ x: [0, xOffset, 0] },
			{ duration: duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
		);
		animate(
			spotlightRight,
			{ x: [0, -xOffset, 0] },
			{ duration: duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
		);
	});
</script>

<div bind:this={spotlightParent} class="pointer-events-none absolute inset-0 h-full w-full">
	<div
		bind:this={spotlightLeft}
		class="pointer-events-none absolute top-0 left-0 z-40 h-screen w-screen"
	>
		<div
			class="absolute top-0 left-0"
			style="
        transform: translateY({translateY}px) rotate(-45deg);
        background: {gradientFirst};
        width: {width}px;
        height: {height}px;
      "
		></div>
		<div
			class="absolute top-0 left-0 origin-top-left"
			style="
        transform: rotate(-45deg) translate(5%, -50%);
        background: {gradientSecond};
        width: {smallWidth}px;
        height: {height}px;
      "
		></div>
		<div
			class="absolute top-0 left-0 origin-top-left"
			style="
        transform: rotate(-45deg) translate(-180%, -70%);
        background: {gradientThird};
        width: {smallWidth}px;
        height: {height}px;
      "
		></div>
	</div>
	<div
		bind:this={spotlightRight}
		class="pointer-events-none absolute top-0 right-0 z-40 h-screen w-screen"
	>
		<div
			class="absolute top-0 right-0"
			style="
        transform: translateY({translateY}px) rotate(45deg);
        background: {gradientFirst};
        width: {width}px;
        height: {height}px;
      "
		></div>
		<div
			class="absolute top-0 right-0 origin-top-right"
			style="
        transform: rotate(45deg) translate(-5%, -50%);
        background: {gradientSecond};
        width: {smallWidth}px;
        height: {height}px;
      "
		></div>
		<div
			class="absolute top-0 right-0 origin-top-right"
			style="
        transform: rotate(45deg) translate(180%, -70%);
        background: {gradientThird};
        width: {smallWidth}px;
        height: {height}px;
      "
		></div>
	</div>
</div>
