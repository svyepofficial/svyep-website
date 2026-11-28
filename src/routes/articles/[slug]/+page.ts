import type { MarkdownPost } from '../../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const markdownPost: MarkdownPost = await import(`../../../lib/articles/${slug}.md`);

	return {
		metadata: markdownPost.metadata,
		article: markdownPost.default
	};
};
