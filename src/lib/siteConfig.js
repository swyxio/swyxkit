export const SITE_URL = 'https://wiki.hyxos.io';
export const APPROVED_POSTERS_GH_USERNAME = ['hyxos', 'macbraughton', 'wobbix'];
export const GH_USER_REPO = 'hyxos/wiki.hyxos.io'; // used for pulling github issues and offering comments
export const SITE_TITLE = 'wiki.hyxos.io';
export const SITE_DESCRIPTION = "Encyclopedia of Hyxos";
export const DEFAULT_OG_IMAGE =
	'https://github.com/organizations/hyxos/settings/profile';
export const MY_TWITTER_HANDLE = 'hyxos';
export const MY_YOUTUBE = 'https://youtube.com/@hyxosio';
export const POST_CATEGORIES = ['Essay', 'Note']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Published'];

// auto generated variables
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const REPO_OWNER = GH_USER_REPO.split('/')[0];

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
