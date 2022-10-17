<script>
	import Newsletter from '../components/Newsletter.svelte';
	import FeatureCard from '../components/FeatureCard.svelte';
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';
	export const prerender = true; // index page is most visited, lets prerender


	/** @type {import('./$types').PageData} */
	export let data;
	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items.slice(0, 10);
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div
	class="flex flex-col items-start justify-center max-w-2xl px-4 pb-16 mx-auto border-gray-200 dark:border-gray-700 sm:px-8"
>
	<div class="flex flex-col-reverse items-start sm:flex-row">
		<div class="flex flex-col pr-8">
			<h1 class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
				This is

				<span
					class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"
				>
					<span class="relative text-yellow-400 skew-y-3">{SITE_TITLE}</span>
				</span>
				!
			</h1>
			<h2 class="mb-4 text-gray-700 dark:text-gray-200">
				An opinionated blog starter for <span class="font-semibold"
					>SvelteKit + Tailwind + Netlify.</span
				>
				Refreshed
				<a href="https://github.com/sveltejs/kit/discussions/5774"
					>the great SvelteKit redesign of Summer 2022</a
				>
			</h2>
			<p class="mb-16 text-gray-600 dark:text-gray-400">
				<a href={REPO_URL}>View source here!</a>
			</p>
		</div>
		<!-- <div
				class="w-[80px] h-[80px] rounded-full sm:w-[176px] sm:h-[136px] relative mb-8 sm:mb-0 mr-auto bg-cyan-300 bg-opacity-25"
			/> -->
	</div>

	<section class="w-full mb-16">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Featured Posts
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
			<FeatureCard title="Welcome to swyxkit 2022!" href="/welcome" stringData="Jan 2022" />
			<FeatureCard
				title="Moving to a GitHub CMS"
				href="/moving-to-a-github-cms"
				stringData="Jan 2022"
			/>
			<FeatureCard title="HTML Ipsum demo" href="/moo" stringData="Jan 2022" />
		</div>
	</section>
	<!-- <section class="w-full mb-16">
		<pre>{JSON.stringify(speaking, null, 2)}</pre>
	</section> -->
	<section class="w-full mb-8">
		<h3 id="latest" class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Latest Posts
		</h3>
		<ul class="space-y-2 text-white">
			{#each items as item (item.slug)}
				<li>
					<a class="font-bold" sveltekit:prefetch href={item.slug}>{item.title}</a>
					<span class="hidden text-xs text-black sm:inline dark:text-gray-400">{new Date(item.date).toISOString().slice(0, 10)}</span>
				</li>
			{/each}
		</ul>
		<a
			class="flex h-6 mt-2 leading-7 text-gray-600 transition-all rounded-lg dark:text-gray-400 dark:hover:text-gray-200"
			href="/ideas"
			>Search and see all posts<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="w-6 h-6 ml-1"
				><path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
				/></svg
			></a
		>
	</section>
	<Newsletter />
</div>
