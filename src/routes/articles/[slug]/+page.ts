import { error } from '@sveltejs/kit';
import type { MarkdownPost } from '../../../types';
import type { PageLoad } from './$types';

const articles = import.meta.glob<MarkdownPost>('/src/lib/articles/*.md');

export const load: PageLoad = async ({ params }) => {
	const load = articles[`/src/lib/articles/${params.slug}.md`];
	if (!load) error(404, 'Article not found');

	const post = await load();
	return { metadata: post.metadata, article: post.default };
};
