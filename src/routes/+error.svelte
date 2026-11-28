<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Page not found' : 'Something went wrong'} • SVYEP</title>
</svelte:head>

<div class="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 pt-32 text-center">
	<p class="font-display text-7xl tracking-tighter text-indigo-400">{page.status}</p>
	<h1 class="text-3xl font-medium tracking-tighter sm:text-4xl">
		{page.status === 404 ? 'This page doesn’t exist' : 'Something went wrong'}
	</h1>
	<p class="max-w-md text-zinc-400">
		{page.status === 404 ? 'The link may be old or mistyped.' : 'Please try again in a moment.'}
	</p>
	<a href="/" class="btn btn-primary">Back to home</a>
</div>
