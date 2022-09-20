import { getContent } from '$lib/content';
import { error } from '@sveltejs/kit';
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ params }) {
	const { slug } = params;
	let data;
	try {
		data = await getContent(slug);
		return new Response(JSON.stringify(data), {
			headers: {
				'Cache-Control': `max-age=0, s-maxage=${3600}`  // todo: if your pages are quite stable, you can increase this to 86400 (1 day)
			}
		});
	} catch (err) {
		throw error(404, err.message);
	}
}
