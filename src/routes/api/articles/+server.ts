import { json } from '@sveltejs/kit';
import { getAllArticles } from '$lib/server/chronicle';

export async function GET() {
	return json(await getAllArticles());
}
