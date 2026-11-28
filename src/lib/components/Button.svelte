<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils/cn';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	const buttonVariants = tv({
		base: 'font-medium border-2 rounded-xl cursor-pointer w-fit',
		variants: {
			variant: {
				default:
					'shadow-glow-blue hover:shadow-glow-blue-hover border-white/5 bg-linear-[325deg] from-indigo-700 from-0% via-indigo-500 via-55% to-indigo-700 to-90% bg-size-[200%_auto] text-white transition-all duration-700 hover:bg-top-right hover:duration-700 active:scale-[0.96] active:border-white/50 active:duration-200',
				secondary:
					'shadow-glow-gray border-white/5 bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all active:scale-[0.96] active:border-white/50 active:duration-200',
				outline:
					'border-white/5 bg-transparent transition-all active:scale-[0.96] active:border-white active:duration-200 hover:bg-gray-700/10'
			},
			size: {
				default: 'px-4 py-1',
				lg: 'text-xl px-5 py-1.5 rounded-2xl',
				icon: 'p-1'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	type ButtonSize = VariantProps<typeof buttonVariants>['size'];
	type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};

	let {
		class: className,
		variant = 'default',
		size = 'default',
		href,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a {href} class={cn(buttonVariants({ variant, size }), className)} {...restProps}
		>{@render children?.()}</a
	>
{:else}
	<button class={cn(buttonVariants({ variant, size }), className)} {...restProps}
		>{@render children?.()}</button
	>
{/if}
