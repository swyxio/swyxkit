<script>
	// href={item.slug} title={item.data.title} date={item.data.date}
	export let href = '#';
	/** @type {import('$lib/types').ContentItem} */
	export let item = undefined;
	/** @type {import('$lib/types').GHMetadata} */
	export let ghMetadata = null;
	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
</script>

<a
	class="w-full text-gray-900 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-yellow-100"
	{href}
	><div class="w-full mb-8">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="flex-auto w-full mb-2 text-lg font-medium md:text-xl">
				{title}
			</h4>
		</div>
		<p class="text-gray-600 break-all sm:break-words dark:text-gray-400">
			<slot />
		</p>
		<div class="flex justify-between gap-1 text-left text-gray-500 sm:justify-start sm:flex-row sm:gap-4 md:mb-0 md:text-sm">
			<!-- {JSON.stringify(item.readingTime)} -->
			<p>{stringData}</p>
			{#if item?.readingTime}
				<p class="hidden sm:inline-block">{item?.readingTime}</p>
			{/if}
			{#if ghMetadata && ghMetadata.reactions.total_count}
				<p class="">{ghMetadata.reactions.total_count} ♥</p>
			{/if}
			<!-- comment this in if you have multiple categories -->
			<!-- <button class="px-4 capitalize bg-gray-200 rounded-xl dark:bg-gray-700 dark:text-gray-400"
				>{item?.category || 'blog'}</button
			> -->
		</div>
	</div></a
>
