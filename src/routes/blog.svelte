<script context="module">
	export const prerender = true;
	export async function load({ page: { params }, fetch }) {
		// if (!valid_lists.has(list)) {
		// 	console.log('invalid');
		// 	return {
		// 		status: 404,
		// 		error: 'Not found'
		// 	};
		// }

		const page = +params.page;

		// const res = await fetch(`https://api.hnpwa.com/v0/${list}/${page}.json`);
		// const items = await res.json();

		const res = await fetch(`/api/listBlogposts.json`);
		const items = await res.json();
		return {
			props: {
				page,
				// list,
				items
			}
		};
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';

	export let page;
	export let list;
	export let items;

	const PAGE_SIZE = 30;

	$: start = 1 + (page - 1) * PAGE_SIZE;
	$: next = `/${list}/${+page + 1}`;
</script>

<svelte:head>
	<title>Swyxkit Blog Index</title>
	<meta name="description" content="Latest Hacker News stories in the {list} category" />
</svelte:head>

<Nav />

<section class="p-16 border-b-thick">
	<h1 class="text-7xl mb-12">Blog Index</h1>
	<div class="container mx-auto">
		{#if items.list.length}
			<ul class="">
				{#each items.list as item}
					<li class="mb-8 text-lg">
						<code class="mr-4">{item.data.date}</code>
						<a sveltekit:prefetch href={item.slug} class="link">{item.data.title}</a>
					</li>
				{/each}
			</ul>
		{:else}
			<div>no items found!</div>
		{/if}
	</div>
</section>

<!-- {#each items as item, i}
	{#if item}
    <ItemSummary {item} index={start + i} />
	{/if}
    {/each} -->
<!-- sometimes we get bad data? TODO investigate -->
<!-- 
{#if next}
	<a class="more" href={next}>More...</a>
{/if} -->
