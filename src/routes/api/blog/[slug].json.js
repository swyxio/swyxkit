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
		console.log('api slug ', err.message)
		return {
			status: 404,
			body: err.message
		}
	}
}
