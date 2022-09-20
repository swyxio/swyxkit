import { error } from '@sveltejs/kit';
// export const prerender = true; // turned off so it refreshes quickly
export async function load({ setHeaders, fetch }) {
	const res = await fetch(`/api/listContent.json`);
	// alternate strategy https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
	// Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
	if (res.status > 400) {
		throw error(res.status, await res.text());
	}

	/** @type {import('$lib/types').ContentItem[]} */
	const items = await res.json();
	setHeaders({
		'Cache-Control': `public, max-age=0, s-maxage=${3600}`  // todo: if your pages are quite stable, you can increase this to 86400 (1 day)
	});
	return { items };
}
