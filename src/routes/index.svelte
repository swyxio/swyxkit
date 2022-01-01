<!-- <script context="module">
	// cant figure this out https://github.com/sveltejs/vite-plugin-svelte/issues/243
	import { REPO_URL } from '../../siteConfig';
	export async function load() {
		return {
			props: {
				REPO_URL
			}
		};
	}
</script> -->
<script>
	import Newsletter from '../components/Newsletter.svelte';
	import FeatureCard from '../components/FeatureCard.svelte';
	export let REPO_URL= "https://github.com/sw-yx/swyxkit/"
	// meta tags
	let Title = 'swyxkit';
	let Description = "swyx's default SvelteKit + Tailwind starter";
	let ogImage =
		'https://opengraph.githubassets.com/5fa65e3ceb548d54756a8a3b6e8ca0cace69e1515bd2641b81c88d24c0a9066b/sw-yx/swyxdotio';
</script>

<svelte:head>
	<title>{Title}</title>
	<link rel="canonical" href="https://swyx.io/" />
	<link rel="alternate" type="application/rss+xml" href="https://swyx.io/rss.xml" />
	<meta property="og:url" content="https://www.swyx.io/" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={Title} />
	<meta name="Description" content={Description} />
	<meta property="og:description" content={Description} />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="https://twitter.com/swyx/" />
	<meta name="twitter:title" content={Title} />
	<meta name="twitter:description" content={Description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

	<div
		class="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16"
	>
		<div class="flex flex-col-reverse sm:flex-row items-start">
			<div class="flex flex-col pr-8">
				<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
					This is Swyxkit!
				</h1>
				<h2 class="text-gray-700 dark:text-gray-200 mb-4">
					An opinionated blog starter for <span class="font-semibold">SvelteKit + Tailwind + Netlify.</span> Refreshed for 2020!
				</h2>
				<p class="text-gray-600 dark:text-gray-400 mb-16">
					<a href={REPO_URL}>View source here!</a>
				</p>
			</div>
			<!-- <div
				class="w-[80px] h-[80px] rounded-full sm:w-[176px] sm:h-[136px] relative mb-8 sm:mb-0 mr-auto bg-cyan-300 bg-opacity-25"
			/> -->
		</div>

		<section class="mb-16">
			<h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
				Featured Posts
			</h3>
			<div class="flex gap-6 flex-col md:flex-row">
				<FeatureCard title="Welcome to swyxkit!" href="/welcome" date={'Jan 2022'} />
				<FeatureCard title="Dolor sit amet consectetur adipisicing elit." date={'Jan 2022'} />
				<FeatureCard title="Nulla, autem." date={'Jan 2022'} />
			</div>
			<a
				class="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg 
				 dark:hover:text-gray-200 transition-all h-6"
				href="/blog"
				>Read all posts<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 ml-1"
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
