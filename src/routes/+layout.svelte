<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<a
	href="#main"
	class="btn btn-primary fixed top-4 left-4 z-[60] -translate-y-24 focus-visible:translate-y-0"
	>Skip to content</a
>
<StarsBackground />
<div class="overflow-x-clip selection:bg-indigo-600 selection:text-white">
	<Navbar />
	<main id="main">
		{@render children()}
	</main>
	<Footer />
</div>
