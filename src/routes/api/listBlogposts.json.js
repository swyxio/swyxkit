import { listBlogposts } from '$lib/markdown';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
// {
// // params
// }
	// const { slug } = params;
	const list = await listBlogposts();
	return {
		body: {
			list
		}
	};
}
