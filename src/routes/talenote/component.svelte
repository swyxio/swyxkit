<script context="module">
	// Write a glob to get your handsome components here. Are they in `lib`? or maybe `components`?
	const modules = import.meta.globEager('/src/lib/**/*.svelte');
</script>

<script>
	import { DisplayComponent } from 'talenote';
</script>

<DisplayComponent {modules} />