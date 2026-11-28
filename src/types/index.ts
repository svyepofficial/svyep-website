import type { Component } from 'svelte';

export type MarkdownPost = {
	metadata: {
		title: string;
		subtitle: string;
		author: string;
		date: string;
		type: string;
		images: string[];
		wordcount: number;
	};
	default: Component;
	slug: string;
};
