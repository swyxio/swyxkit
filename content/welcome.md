---
title: 'Welcome to swyxkit!'
date: '2020-12-02'
author: swyx
---
swyx's preferred starter for Svelte projects:

- SvelteKit
- Tailwind 3 + Tailwind Typography
- Netlify

## Key Features and Design Considerations:

- Features
  - Dark mode
  - Blog with blog index
    - Top level blog URLs (`/myblog` instead of `/blog/myblog`)
    - Blog content in a separte `/content` folder instead of in `/src/routes`
  - Consumes markdown and MDSveX (and in future - external data sources)
    - with syntax highlighting
  - RSS (at `/api/rss.xml`) with caching
- Performance touches
  - no `hydrate` on about and blog pages
  - set `maxage` to 1 minute to cache (consider making it 1-7 days on older posts)
- Minor design/UX touches
  - Error page (try going to URL that doesnt exist)
  - Navlink hover effect
  - Mobile menu with animation
  - Edit on GitHub link
  - Accessible SVG Icons https://github.com/sw-yx/spark-joy/blob/master/README.md#general--misc

## Live Demo

See https://swyxkit.netlify.app/

![image](https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png)

![image](https://user-images.githubusercontent.com/6764957/147861337-d40a1798-e7ff-40e1-8dd8-ba1350fd3784.png)


## Setup

```bash
npm install
npm run start
```

You should be able to deploy this project straight to Netlify as is, just [like this project is](https://app.netlify.com/sites/swyxkit/deploys/).

Before deploying, remember to configure `/lib/siteConfig.js` - just some hardcoded vars i want you to remember to configure.

## Further Reading

You can read:

- [Why I Enjoy Svelte](https://www.swyx.io/svelte-why/), [Svelte for Sites, React for Apps](https://www.swyx.io/svelte-sites-react-apps/)
- [Why Tailwind CSS](https://www.swyx.io/why-tailwind/)
- [How to Setup Svelte with Tailwind](https://dev.to/swyx/how-to-set-up-svelte-with-tailwind-css-4fg5)

## Acknowledgements

- Design from Lee Robinson: https://github.com/leerob/leerob.io/
- MDSvex from Pngwn is amazing https://mdsvex.pngwn.io/docs#layout
- Other people's code I borrowed from
  - https://github.com/mvasigh/sveltekit-mdsvex-blog
  - https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js
  - RSS
    - https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
    - https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
    - Reasons it is hard to do dynamic RSS in Sveltekit:
      - Sveltekit Endpoints dont take over from Sveltekit dynamic param routes (`[slug].svelte` has precedence over `rss.xml.js`)
      - RSS Endpoint runs locally but doesnt run in Netlify bc no access to the content in prod
      - approach i went for is to use Vite's `import.meta.globEager` feature and that makes it static for the RSS... 
- Find more sveltekit projects at https://github.com/janosh/awesome-svelte-kit