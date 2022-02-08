<script>
	// href={item.slug} title={item.data.title} date={item.data.date}
	export let href = '#';

	/** @type {import('$lib/types').GHMetadata} */
	export let ghMetadata = null;
	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
</script>

<a
	sveltekit:prefetch
	class="w-full text-gray-900 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-yellow-100"
	{href}
	><div class="mb-8 w-full">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="mb-2 w-full flex-auto text-lg font-medium md:text-xl">
				{title}
			</h4>
			<div class="inline-flex flex-1 items-center">
				{#if ghMetadata && ghMetadata.reactions.total_count}
					<span
						class=" mr-2 min-w-[2rem] font-mono text-xs text-gray-700 text-opacity-70 dark:text-gray-300"
						>{ghMetadata.reactions.total_count} ♥</span
					>
				{/if}
				<p class="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">{stringData}</p>
			</div>
		</div>
		<p class="text-gray-600 dark:text-gray-400">
			<slot />
		</p>
	</div></a
>
