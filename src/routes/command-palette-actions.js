import { defineActions } from 'svelte-command-palette'
import { goto } from '$app/navigation';

// this is kept as a standalone file simply to make it easy to find and manage sparately

// see full examples here https://svelte-command-palette.vercel.app/docs/command-palette-api
// and here https://github.com/rohitpotato/svelte-command-palette/blob/09c47a3d0f5cc9b5da5a077b92f1d4553bafdaf5/src/routes/__layout-doc.svelte#L10
// (altho docs may sliiiighly be out of date... as of jan 2023)

export const actions = defineActions([
  {
    title: "Open this website's source code",
    subTitle: "This opens GitHub in a new tab!",
    onRun: () => window.open("https://github.com/sw-yx/swyxkit")
  },
  {
    title: "Navigate to Home page",
    onRun: () => goto('/')
  },
  {
    title: "Navigate to Blogpost list (/blog)",
    onRun: () => goto('/blog')
  },
  // {
  //   title: "Navigate to Home page (index)",
  //   onRun: ({ action, storeProps, storeMethods }) => {
  //     window.open("https://github.com/rohitpotato/svelte-command-palette")
  //   },
  // }
])