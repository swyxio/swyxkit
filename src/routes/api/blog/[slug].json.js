import { getContent } from '$lib/content';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { slug } = params;
	let data;
	try {
		data = await getContent(slug);
		return {
			body: JSON.stringify(data),
			headers: {
				'Cache-Control': `max-age=0, s-maxage=${60}` // 1 minute.. for now
			}
		};
	} catch (err) {
		return {
			status: 404,
			body: err.message
		};
	}
}
