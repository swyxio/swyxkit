<!-- https://geoffrich.net/posts/svelte-social-image/ -->
<script>
	export let title = 'Hello, world!';
  // truncate title to max length 100
  if (title.length > 100) title = `${title.substring(0, 100)}...`;
	$: size = title.length > 30 ? 'text-6xl' : 'text-9xl';
	export let subtitle;
</script>

<div
	class={`bg-black text-blue-200
 ${size} flex h-full
 w-full items-center p-4`}
>
	<div class="flex flex-col flex-1">
		<div>
      {title}
    </div>
		{#if subtitle}
			<div class="text-3xl text-blue-400">{subtitle}</div>
		{/if}
	</div>
	<img
		class="h-64"
    alt="sk logo"
		src="https://user-images.githubusercontent.com/6764957/155878641-c13ecdc0-ed2f-458c-88c6-cd34bdb38dae.png"
	/>
</div>
