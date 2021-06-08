<script context="module">
    export async function load({ page: { params }, fetch }) {

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
        const json = await res.json();
		return {
			props: {
				json: json.data
			}
		};
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';

	export let json;
	let metadata = json.data;
	let content = json.content
</script>

<svelte:head>
	<title>{metadata.title} | swyxkit</title>
	<meta name="description" content="swyxkit blog" />
</svelte:head>


<Nav />

<section class="p-16 border-b-thick">
	<h1 class="text-7xl mb-12">{metadata.title}</h1>
	<div class="container mx-auto">
		<div class="p-8">
			{content}
		</div>
	</div>
	<p class="mt-8 py-4">
		<a sveltekit:prefetch class="link" href="/blog">👈 Back to Blog Index</a>
	</p>
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