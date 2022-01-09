<script>
	// href={item.slug} title={item.data.title} date={item.data.date}
	export let href = '#'
	export let ghMetadata = null
	export let title = 'Untitled post'
	export let date = 'no date'
</script>

<a sveltekit:prefetch  class="w-full text-gray-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-100" {href}
	><div class="w-full mb-8">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="w-full mb-2 text-lg font-medium md:text-xl flex-auto">
				{title}
			</h4>
			<div class="inline-flex flex-1 items-center">
				{#if ghMetadata && ghMetadata.reactions.total_count}
					<span class=" min-w-[2rem] mr-2 text-xs font-mono text-opacity-70 text-gray-700 dark:text-gray-300">{ghMetadata.reactions.total_count} ♥</span>
				{/if}
				<p class="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">{date}</p>
			</div>
		</div>
		<p class="text-gray-600 dark:text-gray-400">
			<slot />
		</p>
	</div></a
>
