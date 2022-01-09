<script context="module">
	// export const prerender = true; // turned off so it refreshes quickly
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/listBlogposts.json`);
		// alternate strategy https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
		// Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
		if (res.status > 400) {
			return {
				status: res.status,
				error: await res.text()
			};
		}
		const items = await res.json();
		return {
			props: { items },
			maxage: 60 // 1 minute
		};
	}
</script>

<script>
	import IndexCard from '../components/IndexCard.svelte';

	export let page;
	export let list;
	export let items;

	const PAGE_SIZE = 30;

	$: start = 1 + (page - 1) * PAGE_SIZE;
	$: next = `/${list}/${+page + 1}`;

	let search;
	$: list = items.list.filter((item) => {
		if (search) {
			return item.data.title.toLowerCase().includes(search.toLowerCase());
		}
		return true;
	});
</script>

<svelte:head>
	<title>Swyxkit Blog Index</title>
	<meta name="description" content="Latest Hacker News stories in the {list} category" />
</svelte:head>

<section class="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
	<h1 class="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
		Blog
	</h1>
	<p class="mb-4 text-gray-600 dark:text-gray-400">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sunt reprehenderit alias rerum
		dolor impedit. In total, I've written {items.list.length} articles on my blog. Use the search below
		to filter by title.
	</p>
	<div class="relative w-full mb-4">
		<input
			aria-label="Search articles"
			type="text"
			bind:value={search}
			placeholder="Search articles"
			class="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
		/><svg
			class="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		>
	</div>
	{#if !search}
		<h3 class="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
			Most Popular
		</h3>
		<IndexCard href="/foo" title="Hardcoded Blogpost # 1" date="106,255 views">
			Just a hardcorded blogpost or you can use the metadata up to you
		</IndexCard>
		<IndexCard href="/welcome" title="Welcome to Swyxkit" date="106,255 views">
			Just a hardcorded blogpost or you can use the metadata up to you
		</IndexCard>
		<IndexCard href="/moo" title="Hardcoded Blogpost # 3" date="106,255 views">
			Just a hardcorded blogpost or you can use the metadata up to you

		</IndexCard>

		<h3 class="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
			All Posts
		</h3>
	{/if}
	{#if list.length}
		<ul class="">
			{#each list as item}
				<li class="mb-8 text-lg">
					<!-- <code class="mr-4">{item.data.date}</code> -->
					<IndexCard href={item.slug} title={item.title} date={new Date(item.date).toISOString().slice(0,10)} ghMetadata={item.ghMetadata}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea. Voluptatum nam
						voluptatibus optio corrupti.
					</IndexCard>
				</li>
			{/each}
		</ul>
	{:else}
		<div>no items found!</div>
	{/if}
</section>
