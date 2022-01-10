<script context="module">
	export const prerender = true;
	export const hydrate = true;
	import { REPO_URL } from '$lib/siteConfig';
import Comments from '../components/Comments.svelte';
	export async function load({ url, params, fetch }) {
		const slug = params.slug;
		const res = await fetch(`/api/blog/${slug}.json`);
		if (res.status > 400) {
			return {
				status: res.status,
				error: await res.text()
			};
		}
		const x = (await res.json()).data;
		const json = JSON.parse(x);

		return {
			props: {
				metadata: json.data,
				title: json.title,
				date: json.date,
				content: json.content,
				ghMetadata: json.ghMetadata,
				slug,
				REPO_URL
			}
		};
	}
</script>

<script>

import 'prism-themes/themes/prism-shades-of-purple.min.css'
import Newsletter from '../components/Newsletter.svelte';
import Reactions from '../components/Reactions.svelte';
	export let metadata;
	export let title;
	export let date;
	export let content;
	export let ghMetadata
	// export let slug;
	// export let REPO_URL
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="swyxkit blog" />
</svelte:head>

<article class="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
	<h1 class="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white ">
		{title}
	</h1>
	<div class="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center bg">
		<div class="flex items-center">
			<p class="ml-2 text-sm text-gray-700 dark:text-gray-300">swyx</p>
		</div>
		<p class="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
			<a href={ghMetadata.issueUrl} rel="external" class="no-underline" target="_blank">
				<span class="mr-4 text-xs font-mono text-opacity-70 text-gray-700 dark:text-gray-300">{ghMetadata.reactions.total_count} reactions</span>
			</a>
			{new Date(date).toISOString().slice(0,10)}
		</p>
	</div>
	<div class="flex h-1 w-full my-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />

	<div class="w-full mt-16 mb-32 prose dark:prose-invert max-w-none">
		{@html content}
	</div>
	<div class="prose dark:prose-invert border-t border-b p-4 border-blue-800 mb-12">
		Reactions: <Reactions {ghMetadata} />
	</div>
	<div class="mb-8">
		<Comments {ghMetadata} />
	</div>
	<Newsletter />
</article>
