<script>
	export let title = 'Untitled post';
	export let href = '#';
	export let date = 'no date';
</script>

<a sveltekit:prefetch  class="w-full text-gray-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-100" {href}
	><div class="w-full mb-8">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="w-full mb-2 text-lg font-medium md:text-xl ">
				{title}
			</h4>
			<p class="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">{date}</p>
		</div>
		<p class="text-gray-600 dark:text-gray-400">
			<slot />
		</p>
	</div></a
>
