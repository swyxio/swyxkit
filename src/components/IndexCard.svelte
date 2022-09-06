<script>
	// href={item.slug} title={item.data.title} date={item.data.date}
	export let href = '#';
	/** @type {import('$lib/types').ContentItem} */
	export let item = undefined
	/** @type {import('$lib/types').GHMetadata} */
	export let ghMetadata = null;
	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
	console.log(item)
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
		</div>
		<p class="text-gray-600 dark:text-gray-400">
			<slot />
		</p>
		<div class="flex gap-4 text-left text-gray-500 md:mb-0 md:text-sm m-2">
			<!-- {JSON.stringify(item.readingTime)} -->
			<p>{stringData}</p>
			{#if item?.readingTime}
				<p>{item?.readingTime}</p>
			{/if}
			{#if ghMetadata && ghMetadata.reactions.total_count}
				<p
					class=""
					>{ghMetadata.reactions.total_count} ♥</p
				>
			{/if}
			<button class="rounded-xl px-4 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 capitalize">{item?.category || 'blog'}</button>
			
		</div>
	</div></a
>
