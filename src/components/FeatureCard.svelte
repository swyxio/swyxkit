<script>
	export let title = 'Untitled post';
	export let href = '#';
	export let date;
</script>

<a
	class="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-yellow-400 via-red-500 to-pink-500"
	{href}
	><div class="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
		<div class="flex flex-col md:flex-row justify-between">
			<h4
				class="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight"
			>
				{title}
			</h4>
		</div>
		<div class="flex items-center text-gray-800 dark:text-gray-200 capsize">
			{date}
		</div>
	</div></a
>
