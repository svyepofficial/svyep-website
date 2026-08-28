<script lang="ts">
	/*
	 * Responsive YouTube embed, sized and styled to match the images in the
	 * article layout (600px wide, centred, rounded).
	 *
	 * Uses youtube-nocookie.com so YouTube does not set tracking cookies unless
	 * the viewer actually plays the video.
	 */
	let {
		id,
		title
	}: {
		/** The YouTube video id, e.g. the `pcnaXdX1_Ig` in https://youtu.be/pcnaXdX1_Ig */
		id: string;
		/** Accessible title for the frame — screen readers announce this. */
		title: string;
	} = $props();
</script>

<div class="mr-auto mb-10 ml-auto w-full max-w-[600px]">
	<div class="aspect-video w-full overflow-hidden rounded-3xl">
		<iframe
			src="https://www.youtube-nocookie.com/embed/{id}"
			{title}
			class="h-full w-full"
			loading="lazy"
			referrerpolicy="strict-origin-when-cross-origin"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>
</div>
