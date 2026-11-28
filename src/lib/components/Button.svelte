<script lang="ts">
	// Temporary bridge while pages move to plain <a class="btn">; deleted at the end of the overhaul.
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	let {
		variant = 'default',
		size = 'default',
		class: className = '',
		children,
		...rest
	}: HTMLAnchorAttributes & { variant?: string; size?: string } = $props();
</script>

<a
	class={[
		'btn',
		variant === 'secondary' ? 'btn-secondary' : 'btn-primary',
		size === 'lg' && 'btn-lg',
		className
	]}
	{...rest}>{@render children?.()}</a
>
