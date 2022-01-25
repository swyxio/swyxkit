<script context="module">
	import { MY_TWITTER, MY_YOUTUBE, REPO_URL } from '$lib/siteConfig';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ url }) {
		return {
			props: {
				origin: url.origin
			}
		};
	}
</script>

<script>
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
	export let origin = '';
</script>

<div class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">
	<Nav />
</div>
<main class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">
	<slot />
</main>

<footer class="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
	<hr class="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
	<!-- <div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"> -->
	<div class="grid w-full max-w-2xl grid-cols-1  gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-8">
		<div class="flex flex-col space-y-4">
			<a class="text-gray-500 transition hover:text-gray-300" href="/">Home</a><a
				class="text-gray-500 transition hover:text-gray-300"
				href="/about">About</a
			>
			<a class="text-gray-500 transition hover:text-gray-300" href="/#newsletter">Newsletter</a>
			<a
				class="text-gray-500 transition hover:text-gray-300"
				href={origin + '/api/rss.xml'}
				rel="external">RSS</a
			>
		</div>
		<div class="flex flex-col space-y-4">
			<a
				class="text-gray-500 transition hover:text-gray-300"
				target="_blank"
				rel="noopener noreferrer"
				href={MY_TWITTER}>Twitter</a
			><a
				class="text-gray-500 transition hover:text-gray-300"
				target="_blank"
				rel="noopener noreferrer"
				href={REPO_URL}>GitHub</a
			><a
				class="text-gray-500 transition hover:text-gray-300"
				target="_blank"
				rel="noopener noreferrer"
				href={MY_YOUTUBE}>YouTube</a
			>
		</div>
		<!-- <div class="flex flex-col space-y-4">
			<a class="text-gray-500 hover:text-gray-600 transition" href="/uses">Uses</a><a
				class="text-gray-500 hover:text-gray-600 transition"
				href="/guestbook">Guestbook</a
			><a class="text-gray-500 hover:text-gray-600 transition" href="/snippets">Snippets</a><a
				class="text-gray-500 hover:text-gray-600 transition"
				href="/tweets">Tweets</a
			>
		</div> -->
	</div>
</footer>
