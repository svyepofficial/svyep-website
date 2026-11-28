import type { MarkdownPost } from '../../types';
import { articleDates } from './article-dates';

const archivePageSize = 10;
const pacificCalendar = new Intl.DateTimeFormat('en-CA', {
	timeZone: 'America/Los_Angeles',
	year: 'numeric',
	month: '2-digit',
	day: '2-digit'
});
const modules = import.meta.glob<Omit<MarkdownPost['metadata'], 'date'>>('/src/lib/articles/*.md', {
	import: 'metadata'
});
const index = Object.entries(modules).map(([path, loadMetadata]) => {
	const slug = path.slice(path.lastIndexOf('/') + 1, -3);
	const date = articleDates[slug];
	if (!date) throw new Error(`Missing Chronicle publication date for article ${slug}`);
	return { slug, date, loadMetadata };
});

async function readArticle({ slug, date, loadMetadata }: (typeof index)[number]) {
	return { slug, metadata: { ...(await loadMetadata()), date } };
}

function archiveCutoff(now: Date) {
	const parts = pacificCalendar.formatToParts(now);
	const value = (key: 'year' | 'month' | 'day') => Number(parts.find((p) => p.type === key)?.value);
	return new Date(Date.UTC(value('year') - 1, value('month') - 1, value('day')))
		.toISOString()
		.slice(0, 10);
}

const newestFirst = [...index].sort(
	(a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug)
);

export async function getChroniclePage(archive: boolean, requestedPage: number, now = new Date()) {
	const cutoff = archiveCutoff(now);
	const firstArchived = newestFirst.findIndex(({ date }) => date < cutoff);
	const recentCount = firstArchived === -1 ? newestFirst.length : firstArchived;
	const pages = archive
		? Math.max(1, Math.ceil((index.length - recentCount) / archivePageSize))
		: 1;
	const page = Number.isSafeInteger(requestedPage)
		? Math.max(1, Math.min(requestedPage, pages))
		: 1;
	const start = archive ? recentCount + (page - 1) * archivePageSize : 0;
	const end = archive ? start + archivePageSize : recentCount;
	const selected = await Promise.all(newestFirst.slice(start, end).map(readArticle));
	const articles = selected.map(({ slug, metadata }) => ({
		slug,
		title: metadata.title,
		subtitle: metadata.subtitle,
		author: metadata.author,
		type: metadata.type,
		wordcount: metadata.wordcount,
		date: metadata.date,
		cover: metadata.images?.[0]
	}));
	return { archive, articles, page, pages };
}
