<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { nav, actions } from '$lib/data/site';
	import Logo from '$lib/components/Logo.svelte';
	import List from 'phosphor-svelte/lib/List';
	import X from 'phosphor-svelte/lib/X';

	let open = $state(false);
	afterNavigate(() => (open = false));

	const current = (href: string) => page.url.pathname.startsWith(href) || undefined;
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
	<nav
		aria-label="Main"
		class="mx-auto flex max-w-[1600px] items-center justify-between gap-6 rounded-full border border-white/8 bg-zinc-950/80 py-2 pr-2 pl-4 backdrop-blur-md sm:pl-6"
	>
		<Logo />

		<ul class="hidden gap-6 text-[15px] whitespace-nowrap text-zinc-400 xl:flex">
			{#each nav as link (link.href)}
				<li>
					<a
						href={link.href}
						aria-current={current(link.href) && 'page'}
						class="transition-colors hover:text-zinc-100 aria-[current=page]:text-zinc-100"
						>{link.label}</a
					>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<a href={actions.partner.href} class="btn btn-secondary hidden py-1.5 sm:inline-flex"
				>{actions.partner.label}</a
			>
			<a href={actions.join.href} class="btn btn-primary hidden py-1.5 sm:inline-flex"
				>{actions.join.label}</a
			>
			<button
				type="button"
				class="btn btn-secondary rounded-full p-2 xl:hidden"
				aria-expanded={open}
				aria-controls="site-menu"
				aria-label={open ? 'Close menu' : 'Open menu'}
				onclick={() => (open = !open)}
			>
				{#if open}<X size={20} />{:else}<List size={20} />{/if}
			</button>
		</div>
	</nav>

	{#if open}
		<div
			id="site-menu"
			class="card mx-auto mt-2 max-w-[1600px] p-2 shadow-xl shadow-black/40 xl:hidden"
		>
			<ul class="grid gap-1 sm:grid-cols-2">
				{#each [{ href: '/', label: 'Home' }, ...nav] as link (link.href)}
					<li>
						<a
							href={link.href}
							class="block rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
			<div class="mt-2 flex gap-2 border-t border-white/8 p-2 pt-4 sm:hidden">
				<a href={actions.partner.href} class="btn btn-secondary flex-1">{actions.partner.label}</a>
				<a href={actions.join.href} class="btn btn-primary flex-1">{actions.join.label}</a>
			</div>
		</div>
	{/if}
</header>
