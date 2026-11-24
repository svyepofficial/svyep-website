import { getChroniclePage } from '$lib/server/chronicle';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => {
	const archive = url.searchParams.get('view') === 'archive';
	return getChroniclePage(archive, archive ? Number(url.searchParams.get('page') ?? 1) : 1);
};
