<script lang="ts">
	// A static star field behind every page. Drawn once per resize; no animation loop.
	let canvas: HTMLCanvasElement;

	function draw() {
		const ratio = window.devicePixelRatio || 1;
		const { innerWidth: w, innerHeight: h } = window;
		canvas.width = w * ratio;
		canvas.height = h * ratio;
		const ctx = canvas.getContext('2d')!;
		ctx.scale(ratio, ratio);
		for (let i = 0; i < w * h * 0.00003; i++) {
			ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.5})`;
			ctx.beginPath();
			ctx.arc(Math.random() * w, Math.random() * h, 0.6, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	$effect(draw);
</script>

<svelte:window onresize={draw} />

<canvas bind:this={canvas} aria-hidden="true" class="fixed inset-0 -z-10 size-full"></canvas>
