<script lang="ts">
	import { TaleNote } from 'talenote';

	// not required, just something to get the component name instead of the full file path
	const getComponentName = (name: string) => name.split('/src/lib/')[1].split('.svelte')[0];
</script>

<TaleNote {getComponentName} />