import { getBlogpost } from '$lib/markdown';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(
	{
		params
	}
) {
	const { slug } = params;
	const data = await getBlogpost(slug);
	return {
		body: {
			data: JSON.stringify(data),
		}
	};
}
