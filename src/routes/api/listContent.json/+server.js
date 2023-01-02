// import { json } from '@sveltejs/kit';
import { listContent } from '$lib/content';

/**
 * @type {import('./$types').RequestHandler}
 */
export async function GET({ fetch, setHeaders }) {
	let list = await listContent(fetch);
	list = list.map((item) => {
		item.description = item.description.replace(/[[\]]/gm, ' ')
		return item
	});
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60}` // 1 minute.. for now
	});
	return new Response(JSON.stringify(list), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}
