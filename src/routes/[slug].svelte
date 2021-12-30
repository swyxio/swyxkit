<script context="module">
	export const prerender = true;
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
		const x = (await res.json()).data
		const json = JSON.parse(x);
		// console.log({json})

		return {
			props: {
				metadata: json.data,
				content: json.content
			}
		};
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';

	export let metadata
	export let content 
</script>

<svelte:head>
	<title>{metadata.title} | swyxkit</title>
	<meta name="description" content="swyxkit blog" />
</svelte:head>

<Nav />

<section class="p-16 border-b-thick">
	<div class="container mx-auto">
		<header>
			<h1 class="text-4xl md:text-7xl mb-12 font-extrabold">{metadata.title}</h1>
			<h2 class="border-l-8 border-yellow-200 pl-4">Written on <code>{metadata.date}</code></h2>
		</header>
		<div class="mx-auto max-w-prose">
			<!-- <div class="p-8 text-lg md:text-xl leading-loose md:leading-[2.5rem] tracking-wide"> -->
			<div class="prose">
				<!-- <svelte:component this={Content.toString()} /> -->
				{@html content}
			</div>
		</div>
		<p class="mt-8 py-4">
			<a sveltekit:prefetch class="link" href="/blog">👈 Back to Blog Index</a>
		</p>
	</div>
</section>

<!-- {#each items as item, i}
	{#if item}
    <ItemSummary {item} index={start + i} />
	{/if}
    {/each} -->
<!-- sometimes we get bad data? TODO investigate -->

<!-- {#if next}
	<a class="more" href={next}>More...</a>
{/if} -->
