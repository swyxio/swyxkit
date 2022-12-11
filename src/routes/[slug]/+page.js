import { error } from '@sveltejs/kit';
import { REPO_URL } from '$lib/siteConfig';

export const prerender = true // The basic rule is this: for a page to be prerenderable, any two users hitting it directly must get the same content from the server.


/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, setHeaders }) {
	const slug = params.slug;
	let res = null;
	res = await fetch(`/api/blog/${slug}.json`);
	if (res.status > 400) {
		throw error(res.status, await res.text());
	}
	setHeaders({
		'cache-control': 'public, max-age=60'
	});
	return {
		json: await res.json(),
		slug,
		REPO_URL
	};
	// } catch (err) {
	// 	console.error('error fetching blog post at [slug].svelte: ' + slug, res, err);
	// 	throw error(500, 'error fetching blog post at [slug].svelte: ' + slug + ': ' + res);
	// }
}
