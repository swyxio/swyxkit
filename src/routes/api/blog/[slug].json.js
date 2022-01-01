import { getBlogpost } from '$lib/markdown';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { slug } = params;
	let data
	try {
		data = await getBlogpost(slug);
		return {
			body: {
				data: JSON.stringify(data)
			}
		};
	} catch(err) {
		return {
			status: 404,
			body: err.message
		}
	}
}
