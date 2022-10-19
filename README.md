# SwyxKit

A lightly opinionated starter for SvelteKit blogs:

- Tailwind 3 + Tailwind Typography (with [swyx fixes](https://youtu.be/-FzemNMcOGs))
- [JSDoc Typechecking](https://swyxkit.netlify.app/how-to-add-jsdoc-typechecking-to-sveltekit)
- [GitHub Issues as CMS](https://github.com/sw-yx/swyxkit/issues/10)
- Lots of minor UX opinions (see below)

Feel free to rip out these opinions as you see fit of course.

> "Does anyone know what theme that blog is using? It looks really nice." - [anon](https://news.ycombinator.com/item?id=32972871)

## Live Demo

See https://swyxkit.netlify.app/ (see [Deploy Logs](https://app.netlify.com/sites/swyxkit/deploys))

![screenshot of swyxkit in action](https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png)

![screenshot of swyxkit in action](https://user-images.githubusercontent.com/6764957/147861337-d40a1798-e7ff-40e1-8dd8-ba1350fd3784.png)

## Users in the wild

- https://swyx.io
- https://twitter.com/iambenwis/status/1500998985388937216
- https://twitter.com/lucianoratamero/status/1508832233225867267
- https://twitter.com/Codydearkland/status/1503822866969595904
- add yourself here!

## Key Features and Design Considerations:

- **Features**
  - Dark mode
  - GitHub-Issues-driven blog with index
    - Blog content pulled from the GitHub Issues API
    - Comment and Reaction system from GitHub Issues
    - 🆕 Shortcodes for [embedding Tweets and YouTube videos](http://swyxkit.netlify.app/supporting-youtube-and-twitter-embeds)
    - Consumes markdown/MDSveX
      - With syntax highlighting
      - Fixes for [known MDSveX render issue](https://github.com/pngwn/MDsveX/issues/392)
  - RSS (at `/rss.xml`), and Sitemap (at `sitemap.xml`) with caching
- **Performance/Security touches**
  - Set [`s-maxage`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage) (not `max-age`) to 1 minute to cache (consider making it 1-7 days on older posts)
    - For API endpoints as well as pages
  - Security headers in `netlify.toml`
    - [X-Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
    - [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
    - [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
    - SvelteKit does not yet support [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) - [PR pending here](https://github.com/sveltejs/kit/pull/2394/files)
  - [Builds and deploys in ~40 seconds on Netlify](https://app.netlify.com/sites/swyxkit/deploys)
- **Minor design/UX touches**
  - `full`, `feature`, and `popout` [bleed layout](https://ryanmulligan.dev/blog/layout-breakouts/) classes on desktop - `feature` enabled by default for code samples! ([details and code samples here](https://swyxkit.netlify.app/layout-breakouts-in-swyxkit))
  - Top level blog URLs (`/myblog` instead of `/blog/myblog` - [why](https://www.swyx.io/namespacing-sites/))
  - Blog index truncates at 20 posts to make sure to render quickly
  - Blog search/facets serialize to URLs for easy copy paste ([thanks @Ak4zh](https://github.com/sw-yx/swyxkit/pull/97))
  - [Comments are rendered and sanitized](https://github.com/developit/snarkdown/issues/70)
  - Error page (try going to URL that doesn't exist)
    - Including nice error when GitHub API rate limit exceeded (fix by setting `GH_TOKEN`)
    - The 404 page includes a link you can click that sends you back to the search index with the search terms ([blog post](https://github.com/sw-yx/swyxkit/issues/90))
  - Navlink hover effect
  - [Mobile/Responsive styling](https://swyxkit.netlify.app/mobileresponsive-styling-with-tailwind)
    - Mobile menu with animation
  - Og:image and meta tags for social unfurls (not automatically generated though)
  - Accessibility
    - SVG Icons https://github.com/sw-yx/spark-joy/blob/master/README.md#general--misc
    - [Tap targets](https://web.dev/tap-targets/?utm_source=lighthouse&utm_medium=lr)
  - Custom scrollbar https://css-tricks.com/strut-your-stuff-with-a-custom-scrollbar/
  - Defensive CSS touches https://ishadeed.com/article/defensive-css
- **Developer Experience**
  - [JSDoc Typechecking](https://swyxkit.netlify.app/how-to-add-jsdoc-typechecking-to-sveltekit)
  - ESLint + Prettier
  - [Nightly lockfile upgrades](https://mobile.twitter.com/FredKSchott/status/1489287560387956736)
  - Design system sandbox/"Storybook" setup:
    - `npm run story:dev` to view it on http://localhost:6006/. This is also included in your `npm start` command.


This is a partial implementation of https://www.swyx.io/the-surprisingly-high-table-stakes-of-modern-blogs/

## Setup

### Step 0: Clone project (and deploy)

```bash
npx degit https://github.com/sw-yx/swyxkit
export GH_TOKEN=your_gh_token_here # Can be skipped if just trying out this repo casually
npm install
npm run start # Launches site locally at http://localhost:5173/ and histoire at http://localhost:6006/
```

You should be able to deploy this project straight to Netlify as is, just [like this project is](https://app.netlify.com/sites/swyxkit/deploys/). This project [recently switched](https://github.com/sw-yx/swyxkit/pull/100#issue-1352898457) to use `sveltejs/adapter-auto` (Oct 2022: currently pinned to v72 [because of a Netlify issue](https://github.com/sveltejs/kit/issues/6440#issuecomment-1269274541)), so you should also be able to deploy to Vercel and Cloudflare, but this is not regularly tested (please report/help fix issues if you find them)!

However, to have new posts show up, you will need to personalize the `siteConfig` (see next step) - take note of `APPROVED_POSTERS_GH_USERNAME` in particular (this is an allowlist of people who can post to the blog by opening a GitHub issue, otherwise any rando can blog and that's not good).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/swyxkit)

```bash
# These are just untested, suggested commands, use your discretion to hook it up or deploy wherever
git init
git add .
git commit -m "initial commit"
gh repo create # Make a new public GitHub repo and name it whatever
git push origin master
ntl init # Use the Netlify cli to deploy, assuming you already installed it and logged in. You can also use `ntl deploy`
```

### Step 1: Personalization Configuration

As you become ready to seriously adopt this, remember to configure `/lib/siteConfig.js` - just some hardcoded vars I want you to remember to configure.

```js
export const SITE_URL = 'https://swyxkit.netlify.app';
export const APPROVED_POSTERS_GH_USERNAME = ['sw-yx']; // IMPORTANT: change this to at least your GitHub username, or add others if you want
export const GH_USER_REPO = 'sw-yx/swyxkit'; // Used for pulling GitHub issues and offering comments
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const SITE_TITLE = 'SwyxKit';
export const SITE_DESCRIPTION = "swyx's default SvelteKit + Tailwind starter";
export const DEFAULT_OG_IMAGE =
	'https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png';
export const MY_TWITTER_HANDLE = 'swyx';
export const MY_YOUTUBE = 'https://youtube.com/swyxTV';
export const POST_CATEGORIES = ['Blog']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Published']; // List of allowed issue labels, only the issues having at least one of these labels will show on the blog.
```

Of course, you should then go page by page (there aren't that many) and customize some of the other hardcoded items, for example:

- The `Newsletter` component needs to be wired up to a newsletter service (I like Buttondown, TinyLetter, and Revue)
- Page `Cache-Control` policy and SvelteKit `maxage`
- Site favicons (use https://realfavicongenerator.net/ to make all the variants and stick it in `/static`)
- (If migrating content from previous blog) setup Netlify redirects at `/static/_redirects`

This blog uses GitHub as a CMS - if you are doing any serious development at all, you should give the `GH_TOKEN` env variable to raise rate limit from 60 to 5000.

- A really basic personal access token should be enough and can be created [here](https://github.com/settings/tokens/new).
  https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
- [Set the env variables in Netlify](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables)

When deploying, don't forget to set it in Netlify: https://app.netlify.com/sites/YOUR_SITE/settings/deploys#environment

### Step 2: Make your first post

Open a new GitHub issue on your new repo, write some title and markdown in the body, **add a `Published` tag** (or any one of the label set in `GH_PUBLISHED_TAGS`), and then save.

You should see it refetched in local dev or in the deployed site pretty quickly. You can configure SvelteKit to build each blog page up front, or on demand. Up to you to trade off speed and flexibility.

If your `Published` post (any post with one of the labels set in `GH_PUBLISHED_TAGS`) doesn't show up, you may have forgotten to set `APPROVED_POSTERS_GH_USERNAME` to your GitHub username in `siteConfig`.

If all of this is annoying feel free to rip out the GitHub Issues CMS wiring and do your own content pipeline, I'm not your boss. MDSveX is already set up in this repo if you prefer not having a disconnected content toolchain from your codebase (which is fine, I just like having it in a different place for a better editing experience). See also my blogpost on [the benefits of using GitHub Issues as CMS](https://swyxkit.netlify.app/moving-to-a-github-cms).

## Optimizations to try after you are done deploying

- Customize your JSON+LD for [FAQ pages](https://rodneylab.com/sveltekit-faq-page-seo/), [organization, or products](https://navillus.dev/blog/json-ld-in-sveltekit). There is a schema for blogposts, but it is so dead simple that SwyxKit does not include it.
- Have a process to [submit your sitemap to Google](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap#addsitemap)? (or configure `robots.txt` and hope it works)
- Testing: make sure you have run `npx playwright install` and then you can run `npm run test`

## Further Reading

- [Why I Enjoy Svelte](https://www.swyx.io/svelte-why/)
- [Svelte for Sites, React for Apps](https://www.swyx.io/svelte-sites-react-apps/)
- [Why Tailwind CSS](https://www.swyx.io/why-tailwind/)
- [Moving to a GitHub CMS](https://swyxkit.netlify.app/moving-to-a-github-cms)
- [How to Setup Svelte with Tailwind](https://dev.to/swyx/how-to-set-up-svelte-with-tailwind-css-4fg5)

## Acknowledgements

- Design from Lee Robinson: https://github.com/leerob/leerob.io/
- MDSveX from Pngwn is amazing https://mdsvex.pngwn.io/docs#layout
- Other people's code I borrowed from
  - https://github.com/mvasigh/sveltekit-mdsvex-blog
  - https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js
  - RSS
    - https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
    - https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
    - Reasons it is hard to do dynamic RSS in SvelteKit:
      - SvelteKit Endpoints don't take over from SvelteKit dynamic param routes (`[slug].svelte` has precedence over `rss.xml.js`)
        - Aug 2022: now solved due to PlusKit
      - RSS Endpoint runs locally but doesn't run in Netlify because there's no access to the content in prod ([SvelteKit issue](https://github.com/sveltejs/kit/issues/3535))
  - Sitemap.xml https://github.com/sveltejs/kit/issues/1142#issuecomment-1107667691
- Find more SvelteKit projects at https://github.com/janosh/awesome-svelte-kit

## Todos

- Implement ETag header for GitHub API
- Store results in Netlify build cache
- Separate hydration path for mobile nav (so that we could `hydrate=false` some pages)
- Custom components in MDX, and rehype plugins
