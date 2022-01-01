import RSS from 'rss'
import { SITE_URL } from '../../siteConfig'
// https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js
export async function get() {

  const feed = new RSS({
    title: 'swyxkit blog',
    site_url: SITE_URL,
    feed_url: SITE_URL + '/rss.xml'
  });

  const res = await fetch(`/api/listBlogposts.json`);
  const allBlogs = await res.json();
  console.log(allBlogs.list)
  allBlogs.list.forEach((post) => {
    feed.item({
      title: post.title,
      url: SITE_URL + `/${post.slug}`,
      date: post.data.date,
      description: post.content.slice(0, 200)
    });
  });

  // todo - nonindent if not human
  return {
    body: feed.xml({ indent: true }),
    headers: {
      'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
      'Content-Type': 'application/rss+xml'
    }
  };
}