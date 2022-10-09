
<script>

  import Reactions from './Reactions.svelte';
  export let Hst
</script>
<Hst.Story title="No Reactions">
  <Reactions reactions={{
    total_count: 0,
    '+1': 0,
    '-1': 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  }}
  issueUrl="https://github.com/sw-yx/swyxkit/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"
  />
</Hst.Story>

