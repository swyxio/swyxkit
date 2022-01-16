<script context="module">
	// export const prerender = true; // you can uncomment to prerender as an optimization
	export const hydrate = true;
	import { REPO_URL, SITE_URL } from '$lib/siteConfig';
	import Comments from '../components/Comments.svelte';
	export async function load({ url, params, fetch }) {
		const slug = params.slug;
		try {
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
					json,
					slug,
					REPO_URL
				},
				maxage: 60 // 1 minute
			};
		} catch (err) {
			console.error('error fetching blog post at [slug].svelte: ' + slug, err);
			return {
				status: 500,
				error: new Error('error fetching blog post at [slug].svelte: ' + slug)
			};
		}
	}
</script>

<script>
	import 'prism-themes/themes/prism-shades-of-purple.min.css';
	import Newsletter from '../components/Newsletter.svelte';
	import Reactions from '../components/Reactions.svelte';
	export let json
	let title = json.title;
	let date = json.date;
	let content = json.content;
	let ghMetadata = json.ghMetadata;
	// export let slug;
	// export let REPO_URL
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="swyxkit blog" />

	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="Description" content={json.description} />
	<meta property="og:description" content={json.description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="https://twitter.com/swyx/" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={json.description} />
	{#if json.image}
		<meta property="og:image" content={json.image} />
		<meta name="twitter:image" content={json.image} />
	{/if}
</svelte:head>

<article class="flex flex-col px-4 sm:px-8 items-start justify-center w-full max-w-2xl mx-auto mb-16">
	<h1 class="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white ">
		{title}
	</h1>
	<div class="flex sm:flex-col sm:items-start justify-between w-full mt-2 md:flex-row md:items-center bg">
		<p class="flex items-center text-sm text-gray-700 dark:text-gray-300">swyx</p>
		<p class="flex items-center text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
			<a href={ghMetadata.issueUrl} rel="external" class="no-underline" target="_blank">
				<span class="mr-4 text-xs font-mono text-opacity-70 text-gray-700 dark:text-gray-300"
					>{ghMetadata.reactions.total_count} reactions</span
				>
			</a>
			{new Date(date).toISOString().slice(0, 10)}
		</p>
	</div>
	<div class="flex h-1 w-[100vw] sm:w-full -mx-4 sm:mx-0 my-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />

	<div class="w-full mt-16 mb-32 prose dark:prose-invert max-w-none">
		{@html content}
	</div>
</article>
<div class="max-w-2xl mx-auto">
	<div class="prose dark:prose-invert border-t border-b p-4 border-blue-800 mb-12">
		{#if ghMetadata.reactions.total_count > 0}
			Reactions: <Reactions {ghMetadata} />
		{:else}
			<a href={ghMetadata.issueUrl}>Leave a reaction </a>
			if you liked this post! 🧡
		{/if}
	</div>
	<div class="mb-8">
		<Comments {ghMetadata} />
	</div>

	<Newsletter />
</div>