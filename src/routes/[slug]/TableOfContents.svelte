<script>
	// import { createTocStore } from '@svelte-put/toc';
	// const tocStore = createTocStore();
	export let tocStore;

	let isOpen = false;
</script>

<!-- Table of contents thing -->
{#if Object.values($tocStore.items).length && Object.values($tocStore.items).length > 1}
	<!-- desktop version -->
	<section
		class="fixed right-4 bottom-1 hidden max-w-[12em] rounded-xl bg-white/25 p-2 backdrop-blur sm:block"
	>
		<h2 class="text-orange-700 dark:text-orange-400">Table of Contents</h2>
		<ul class="space-y-2">
			{#each Object.values($tocStore.items) as { id, text }}
				<a
					class="ml-2 block bg-opacity-25 text-sm"
					class:bg-amber-300={$tocStore.activeItem?.id === id}
					href="#{id}"
				>
					<li>{text}</li>
				</a>
			{/each}
		</ul>
	</section>

	<!-- mobile responsive version -->
	<section
		class="fixed right-4 bottom-1 max-w-[12em] rounded-xl bg-white/25 p-2 backdrop-blur sm:hidden"
	>
		{#if !isOpen}
			<button class="" on:click={() => (isOpen = !isOpen)}>
				<h2 class="text-orange-700 dark:text-orange-400">Contents</h2>
			</button>
		{/if}
		{#if isOpen}
			<ul class="space-y-2">
				<h2 class="text-orange-700 dark:text-orange-400">
					Table of Contents
					<button class="hover:text-white" on:click={() => (isOpen = !isOpen)}> [X] </button>
				</h2>
				{#each Object.values($tocStore.items) as { id, text }}
					<a
						class="ml-2 block bg-opacity-25 text-sm"
						class:bg-amber-300={$tocStore.activeItem?.id === id}
						href="#{id}"
						on:click={() => (isOpen = !isOpen)}
					>
						<li>{text}</li>
					</a>
				{/each}
			</ul>
		{/if}
	</section>
{/if}
