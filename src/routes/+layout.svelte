<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="overflow-x-clip selection:bg-indigo-700 selection:text-white">
	<Navbar />
	{@render children()}
	<Footer />
</div>
