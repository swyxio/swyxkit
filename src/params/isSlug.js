// because of our design choice to have slugs at the topmost level of the URL, we need to make sure that the slug is not a file extension
// so as to serve stuff like /static/github.svg
// we use the sveltekit matching feature to achieve this 
// docs https://kit.svelte.dev/docs/advanced-routing#matching

/** @type {import('@sveltejs/kit').ParamMatcher} */
export async function match(param) {


  // test param against regex for file extensions; return true if not file
  const isFile = /\.(?:[a-z0-9]+)$/i.test(param);
  if (isFile) return false;

  // TODO: check if is a valid slug?

  return true
}