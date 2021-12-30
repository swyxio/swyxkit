<script>
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
</script>

<div class="flex flex-col justify-center px-8">
	<Nav />
</div>
<main class="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
	<slot />
</main>

<footer class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
	<hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
	<!-- <div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"> -->
	<div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
		<div class="flex flex-col space-y-4">
			<a class="text-gray-500 hover:text-gray-300 transition" href="/">Home</a><a
				class="text-gray-500 hover:text-gray-300 transition"
				href="/about">About</a
			><a class="text-gray-500 hover:text-gray-300 transition" href="/#newsletter">Newsletter</a>
		</div>
		<div class="flex flex-col space-y-4">
			<a
				class="text-gray-500 hover:text-gray-300 transition"
				target="_blank"
				rel="noopener noreferrer"
				href="https://twitter.com/swyx">Twitter</a
			><a
				class="text-gray-500 hover:text-gray-300 transition"
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/sw-yx/swyxkit">GitHub</a
			><a
				class="text-gray-500 hover:text-gray-300 transition"
				target="_blank"
				rel="noopener noreferrer"
				href="https://youtube.com/swyxTV">YouTube</a
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
