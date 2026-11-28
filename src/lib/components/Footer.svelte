<script lang="ts">
	import { nav, actions, email, instagram } from '$lib/data/site';
	import Logo from '$lib/components/Logo.svelte';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';

	const links = [{ href: '/', label: 'Home' }, ...nav, actions.partner, actions.join];
</script>

<footer class="border-t border-white/8 px-6 pt-12 pb-8">
	<div
		class="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row md:items-start md:justify-between"
	>
		<div class="flex flex-col items-center gap-5 md:items-start">
			<Logo />
			<div class="flex gap-2 text-zinc-400">
				<a
					href="mailto:{email}"
					aria-label="Email SVYEP"
					class="rounded-lg p-2 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
				>
					<EnvelopeSimple size={22} />
				</a>
				<a
					href={instagram}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="SVYEP on Instagram"
					class="rounded-lg p-2 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
				>
					<InstagramLogo size={22} />
				</a>
			</div>
		</div>
		<nav aria-label="Footer">
			<ul
				class="grid grid-cols-2 gap-x-12 gap-y-3 text-center text-sm text-zinc-400 sm:grid-cols-3 md:text-left"
			>
				{#each links as link (link.href)}
					<li>
						<a href={link.href} class="transition-colors hover:text-zinc-100">{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<p class="mt-12 text-center text-xs text-zinc-400">
		© {new Date().getFullYear()} Silicon Valley Youth Entrepreneurship Program
	</p>
</footer>
