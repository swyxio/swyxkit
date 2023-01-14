<!-- https://mdsvex.pngwn.io/docs#custom-components -->
<script context="module">
  import h6 from './Embed.svelte';
  export { h6 };
</script>

<!-- https://tailwindcss.com/docs/typography-plugin#element-modifiers -->
<article
	class="container prose mx-auto mb-12 hover:prose-a:text-blue-300
prose-ul:list-disc
dark:prose-invert
"
>
	<slot />
</article>
