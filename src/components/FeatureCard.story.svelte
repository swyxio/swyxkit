<script>
  import FeatureCard from './FeatureCard.svelte';
  export let Hst
</script>

<Hst.Story title="FeatureCard">
  <FeatureCard 
    title="the Best blogpost of all time"
    href="http://example.com"
    stringData="This is a string"
    ></FeatureCard>
</Hst.Story>


<!-- <script>
  import FeatureCard from './FeatureCard.svelte'
  export let Hst
</script>
<Hst.Story>
  <FeatureCard title="Welcome to swyxkit 2022!" href="/welcome" stringData="Jan 2022" />
</Hst.Story> -->