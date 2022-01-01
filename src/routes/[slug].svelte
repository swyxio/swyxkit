<script context="module">
	export const prerender = true;
	export const hydrate = false;
	export async function load({ params, fetch }) {
		// if (!valid_lists.has(list)) {
		// 	console.log('invalid');
		// 	return {
		// 		status: 404,
		// 		error: 'Not found'
		// 	};
		// }

		const slug = params.slug;

		// const res = await fetch(`https://api.hnpwa.com/v0/${list}/${page}.json`);
		// const items = await res.json();

		const res = await fetch(`/api/blog/${slug}.json`);
		const x = (await res.json()).data;
		const json = JSON.parse(x);
		// console.log({json})

		return {
			props: {
				metadata: json.data,
				content: json.content,
				slug
			}
		};
	}
</script>

<script>
	import { REPO_URL } from 'siteConfig';
import Newsletter from '../components/Newsletter.svelte';
	export let metadata;
	export let content;
	export let slug;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content="swyxkit blog" />
</svelte:head>

<article class="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
	<h1 class="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
		{metadata.title}
	</h1>
	<div class="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
		<div class="flex items-center">
			<p class="ml-2 text-sm text-gray-700 dark:text-gray-300">{metadata.author}</p>
		</div>
		<p class="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
			{metadata.date}
		</p>
	</div>
	<div class="w-full my-8 prose dark:prose-invert max-w-none">
		{@html content}
	</div>
	<div>
		Found a typo? Wanna add something? Edit this page on <a href={`${REPO_URL}/blob/main/content/${slug}.md`}>GitHub</a>!
	</div>
	<Newsletter />
</article>

<!-- <section class="p-16 border-b-thick">
	<div class="container mx-auto">
		<header>
			<h1 class="text-4xl md:text-7xl mb-12 font-extrabold">{metadata.title}</h1>
			<h2 class="border-l-8 border-yellow-200 pl-4">Written on <code>{metadata.date}</code></h2>
		</header>
		<div class="mx-auto max-w-prose">
			<div class="prose">
				{@html content}
			</div>
		</div>
		<p class="mt-8 py-4">
			<a sveltekit:prefetch class="link" href="/blog">👈 Back to Blog Index</a>
		</p>
	</div>
</section> -->

<!-- {#each items as item, i}
	{#if item}
    <ItemSummary {item} index={start + i} />
	{/if}
    {/each} -->
<!-- sometimes we get bad data? TODO investigate -->

<!-- {#if next}
	<a class="more" href={next}>More...</a>
{/if} -->
