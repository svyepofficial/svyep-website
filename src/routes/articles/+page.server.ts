import { getChroniclePage } from '$lib/server/chronicle';
import type { PageServerLoad } from './$types';

// Rendered per request: it reads query params and the archive cutoff moves with today's date.
export const prerender = false;

export const load: PageServerLoad = ({ url }) => {
	const archive = url.searchParams.get('view') === 'archive';
	return getChroniclePage(archive, archive ? Number(url.searchParams.get('page') ?? 1) : 1);
};
