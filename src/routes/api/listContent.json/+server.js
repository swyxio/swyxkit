// import { json } from '@sveltejs/kit';
import { listContent } from '$lib/content';

/**
 * @type {import('./$types').RequestHandler}
 */
export async function GET({ setHeaders }) {
	const list = await listContent();
	setHeaders({
		'Cache-Control': `public, max-age=0, s-maxage=${3600}`  // todo: if your pages are quite stable, you can increase this to 86400 (1 day)
	});
	return new Response(JSON.stringify(list), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}
