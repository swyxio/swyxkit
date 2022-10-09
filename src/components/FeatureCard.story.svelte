<!-- histoire is set up for any *.story.svelte file in this directory; so feel free to make more
we are just making a consolidated file here for small little stories -->

<script>
  import FeatureCard from './FeatureCard.svelte';
  export let Hst
</script>

<Hst.Story title="FeatureCard">
  <FeatureCard title="Welcome to swyxkit 2022!" href="/welcome" stringData="Jan 2022" />
</Hst.Story>

