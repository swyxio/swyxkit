import { listBlogposts } from '$lib/content';

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
