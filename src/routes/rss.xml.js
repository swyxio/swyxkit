import RSS from 'rss'
import { SITE_URL } from '../lib/siteConfig'
// https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({
	url // url: URL;
	// method: string;
	// headers: RequestHeaders;
	// rawBody: RawBody;
	// params: Record<string, string>;
	// body: ParameterizedBody<Body>;
	// locals: Locals;
}) {

  const feed = new RSS({
    title: 'swyxkit blog',
    site_url: SITE_URL,
    feed_url: SITE_URL + '/rss.xml'
  });

  const res = await fetch(url.origin + `/api/listBlogposts.json`);
  const allBlogs = await res.json();
  allBlogs.list.forEach((post) => {
    feed.item({
      title: post.title,
      url: SITE_URL + `/${post.slug}`,
      date: post.data.date,
      description: makeDescription(post)
    });
  });

  function makeDescription(post) {
    if (post.data.description) return post.data.description
    if (post.content.length > 300) return post.content.slice(0, 300) + '\n [TRUNCATED]'
    return post.content
  }

  // todo - nonindent if not human
  return {
    body: feed.xml({ indent: true }),
    headers: {
      'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
      'Content-Type': 'application/rss+xml'
    }
  };
}