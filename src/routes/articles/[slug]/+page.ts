import { error } from '@sveltejs/kit';
import type { MarkdownPost } from '../../../types';
import type { EntryGenerator, PageLoad } from './$types';

const articles = import.meta.glob<MarkdownPost>('/src/lib/articles/*.md');

// /articles isn't prerendered, so the crawler can't discover every article: list them all.
export const entries: EntryGenerator = () =>
	Object.keys(articles).map((path) => ({ slug: path.slice(path.lastIndexOf('/') + 1, -3) }));

export const load: PageLoad = async ({ params }) => {
	const load = articles[`/src/lib/articles/${params.slug}.md`];
	if (!load) error(404, 'Article not found');

	const post = await load();
	return { metadata: post.metadata, article: post.default };
};
