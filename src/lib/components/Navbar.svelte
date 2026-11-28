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

<header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-10">
	<nav
		aria-label="Main"
		class="mx-auto flex max-w-[1600px] items-center justify-between gap-6 rounded-full border-2 border-white/5 bg-zinc-950/70 py-1 pr-3 pl-4 backdrop-blur-xl sm:w-10/12 sm:pl-6"
	>
		<Logo />

		<ul class="hidden gap-4 whitespace-nowrap text-gray-400 xl:flex">
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
			<a href={actions.partner.href} class="btn btn-secondary hidden py-1 sm:inline-flex"
				>{actions.partner.label}</a
			>
			<a href={actions.join.href} class="btn btn-primary hidden py-1 sm:inline-flex"
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
				{#if open}<X size={24} />{:else}<List size={24} />{/if}
			</button>
		</div>
	</nav>

	{#if open}
		<div
			id="site-menu"
			class="card mx-auto mt-2 max-w-[1600px] p-2 shadow-xl shadow-black/40 sm:w-10/12 xl:hidden"
		>
			<ul class="grid gap-1 sm:grid-cols-2">
				{#each [{ href: '/', label: 'Home' }, ...nav] as link (link.href)}
					<li>
						<a
							href={link.href}
							class="block rounded-xl px-4 py-3 text-lg text-zinc-300 transition-colors hover:bg-gray-700 hover:text-zinc-100"
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
