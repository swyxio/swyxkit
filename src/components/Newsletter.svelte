<script>
	let isNewsletterOpen = true;
	function toggleNewsletter() {
		isNewsletterOpen = !isNewsletterOpen;
	}
</script>

<section class="mb-16 w-full" id="newsletter">
	<div
		class="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-700"
	>
		<div class="flex justify-between items-center space-x-4">
			<p class="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
				Subscribe to the newsletter
			</p>

			<button
				aria-label="Toggle Newsletter CTA"
				class="w-9 h-9 rounded-lg  flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
				on:click={toggleNewsletter}
			>
				{#if isNewsletterOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
		</div>
		{#if isNewsletterOpen}
			<p class="my-1 text-gray-800 dark:text-gray-200">
				Get emails from me about <span class="font-bold"
					>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, ducimus.</span
				>.
			</p>
			<form class="relative my-4">
				<input
					type="email"
					aria-label="Email for newsletter"
					placeholder="tim@apple.com"
					autocomplete="email"
					required={true}
					class="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
				/><button
					class="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
					type="submit">Subscribe</button
				>
			</form>
			<p class="text-sm text-gray-800 dark:text-gray-200">
				3 subscribers including my Mom – <a href="/#newsletter">23 issues</a>
			</p>
		{/if}
	</div>
</section>
