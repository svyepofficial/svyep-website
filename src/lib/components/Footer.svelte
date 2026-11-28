<script lang="ts">
	import { nav, actions, email, instagram } from '$lib/data/site';
	import Logo from '$lib/components/Logo.svelte';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';

	const link = (href: string) => nav.find((l) => l.href === href)!;
	const columns = [
		[{ href: '/', label: 'Home' }, link('/about'), link('/impact')],
		[link('/events'), link('/ybvc'), link('/articles'), link('/donate')],
		[
			{ href: actions.partner.href, label: 'Partner' },
			{ href: actions.join.href, label: 'Join' },
			link('/young-innovators')
		]
	];
</script>

<footer class="flex flex-col items-center gap-10 bg-linear-to-t from-[#120f35] to-zinc-950 pt-14">
	<div class="flex w-full flex-col items-center justify-evenly gap-y-8 md:flex-row">
		<div class="flex w-[300px] justify-center gap-4 text-gray-400">
			<a href="mailto:{email}" aria-label="Email SVYEP" class="transition-colors hover:text-white">
				<EnvelopeSimple size={30} weight="thin" />
			</a>
			<a
				href={instagram}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="SVYEP on Instagram"
				class="transition-colors hover:text-white"
			>
				<InstagramLogo size={30} weight="thin" />
			</a>
		</div>
		<Logo />
		<nav
			aria-label="Footer"
			class="flex w-[300px] justify-center gap-8 text-sm font-extralight text-gray-400"
		>
			{#each columns as column, i (i)}
				<ul class="flex flex-col items-center gap-2 text-center">
					{#each column as item (item.href)}
						<li><a href={item.href} class="transition-colors hover:text-white">{item.label}</a></li>
					{/each}
				</ul>
			{/each}
		</nav>
	</div>
	<p class="m-2 text-center text-xs text-gray-500">
		© {new Date().getFullYear()} by the Silicon Valley Youth Entrepreneurship Program
	</p>
</footer>
