<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	class="text-gray-800 dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-all"
	class:font-semibold={isActive}
	{href}
	><span class="capsize"><slot /> </span>
</a>
