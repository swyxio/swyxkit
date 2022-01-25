<script>
	export let ghMetadata;
	let reactions = {
		'+1': '👍',
		'-1': '👎',
		laugh: '😆',
		hooray: '🎉',
		confused: '😕',
		heart: '❤️',
		rocket: '🚀',
		eyes: '👀'
	};
</script>

<a href={`${ghMetadata.issueUrl}#issuecomment-new`} class="no-underline">
	{#each Object.keys(ghMetadata.reactions) as reaction}
		{#if Object.keys(reactions).includes(reaction) && ghMetadata.reactions[reaction] > 0}
			<span class="reaction-button">
				<span class="space-x-1 rounded border-blue-800 p-2">
					<span class="reaction-button-emoji">{reactions[reaction]}</span>
					<span class="reaction-button-count">{ghMetadata.reactions[reaction]}</span>
				</span>
			</span>
		{/if}
	{/each}
</a>
