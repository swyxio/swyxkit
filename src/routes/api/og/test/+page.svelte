<script>
	import Card from '../_OGCard.svelte';

	let msg = "Hello, world"
	let subtitle = ""
</script>

<h1 class="text-white text-xl mb-4"> this page is for testing the og card iteratively as you develop it </h1>
<input bind:value={msg} class="my-8" />
<input bind:value={subtitle} placeholder="subtitle here" class="my-8" />
<div class="card bg-white">
	<Card title={msg} {subtitle} />
</div>

<style>
	@font-face {
		font-family: 'Noto Sans';
		src: url('/src/lib/NotoSans-Regular.ttf');
	}

	.card {
		height: 630px;
		width: 1200px;
		/* height: 315px;
		width: 600px; */
    border: 1px solid red;
	}
</style>