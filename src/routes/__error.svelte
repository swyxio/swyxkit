<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';
	import { dev } from '$app/env';

	export let status;
	export let error;

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;

	let message = offline ? 'Find the internet and try again' : error.message;

	let title = offline ? 'Offline' : status;
	if (title === '404') {
		title = 'Page not found :(';
		message = 'Sorry! If you think this URL is broken, please let me know!';
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="container prose mx-auto py-12 dark:prose-invert">
	<h1>Error: {title}</h1>

	<p class="font-mono">{message}</p>

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
