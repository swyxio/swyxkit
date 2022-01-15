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
		},
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${60}`, // 1 minute.. for now
		}
	};
}
