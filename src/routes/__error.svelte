<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ url, error, status }) {
		return {
			props: { error, status, url }
		};
	}
</script>

<script>
	// import Nav from '../components/Nav.svelte';
	import { dev } from '$app/env';

	export let url;
	export let status;
	export let error;

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;

	let message = offline ? 'Find the internet and try again' : error?.message;

	let title = offline ? 'Offline' : status;
	if (status === 404) {
		title = 'Page not found :(';
		message = 'Sorry! If you think this URL is broken, please let me know!';
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="container prose mx-auto py-12 dark:prose-invert">
	<h1>{status}: {title}</h1>

	{#if status === 404}
		<p class="">There is no post at the slug <code>{url.pathname}</code>.</p>
		<p><a href={'/ideas/?filter=' + url.pathname.slice(1)}>Try searching for it here!</a></p>
		<p class="">If you believe this was a bug, please let me know! Email swyx [at] swyx.io</p>
	{:else}
		<p class="font-mono">{message}</p>
	{/if}
	{#if dev && error.stack}
		<pre class="mono overflow-scroll bg-gray-800 p-8">{error.stack}</pre>
	{/if}
</section>

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
