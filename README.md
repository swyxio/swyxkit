# swyxkit!

swyx's preferred starter for Svelte projects:

- SvelteKit
- Tailwind 3 + Tailwind Typography
- Netlify

still work in progress, please dont use this yet...

## Key Features and Design Considerations:

- Features
  - Dark mode
  - Blog with blog index
    - Top level blog URLs (`/myblog` instead of `/blog/myblog`)
    - Blog content in a separte `/content` folder instead of in `/src/routes`
  - Consumes markdown and MDSveX (and in future - external data sources)
    - with syntax highlighting
  - RSS (at `/rss.xml`) with caching
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

<div>
<img src="https://user-images.githubusercontent.com/6764957/121153339-8d77c700-c878-11eb-80f4-083e9dbcb84b.png" height="600" />
<img align="right" src="https://user-images.githubusercontent.com/6764957/121153375-9799c580-c878-11eb-9f77-077030f32d96.png" height="600" />
</div>

![CleanShot 2021-06-08 at 19 07 30](https://user-images.githubusercontent.com/6764957/121174796-e3ef0080-c88c-11eb-8b49-38cc0c64d11c.png)

## Setup

```bash
npm install
npm run start
```

You should be able to deploy this project straight to Netlify as is, just [like this project is](https://app.netlify.com/sites/swyxkit/deploys/).

Before deploying, remember to configure `siteConfig.js` - just some hardcoded vars i want you to remember to configure.

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
- Find more sveltekit projects at https://github.com/janosh/awesome-svelte-kit