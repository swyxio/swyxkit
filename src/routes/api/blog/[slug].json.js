import { getBlogpost } from '$lib/content';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { slug } = params;
	let data;
	try {
		data = await getBlogpost(slug);
		return {
			body: {
				data: JSON.stringify(data)
			},
			headers: {
				'Cache-Control': `max-age=0, s-max-age=${60}` // 1 minute.. for now
			}
		};
	} catch (err) {
		return {
			status: 404,
			body: err.message
		};
	}
}
