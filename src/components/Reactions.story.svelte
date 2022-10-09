
<script>

  import Reactions from './Reactions.svelte';
  export let Hst
</script>
<Hst.Story title="Full Reactions">
  <Reactions reactions={{
    total_count: 40,
    '+1': 5,
    '-1': 5,
    laugh: 5,
    hooray: 5,
    confused: 5,
    heart: 5,
    rocket: 5,
    eyes: 5,
  }}
  issueUrl="https://github.com/sw-yx/swyxkit/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"
  />
</Hst.Story>

