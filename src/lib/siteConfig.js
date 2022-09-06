import { env } from '$env/dynamic/public';

export const SITE_URL = env.PUBLIC_SITE_URL || 'https://swyxkit.netlify.app'
export const GH_USER_REPO = env.PUBLIC_GH_USER_REPO || 'sw-yx/swyxkit'
export const SITE_TITLE = env.PUBLIC_SITE_TITLE || 'SwyxKit'
export const SITE_DESCRIPTION = env.PUBLIC_SITE_DESCRIPTION || "swyx's default SvelteKit + Tailwind starter"
export const DEFAULT_OG_IMAGE = env.PUBLIC_DEFAULT_OG_IMAGE || 'https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png'
export const MY_TWITTER_HANDLE = env.PUBLIC_MY_TWITTER_HANDLE || 'swyx'
export const MY_YOUTUBE = env.PUBLIC_MY_YOUTUBE || 'https://youtube.com/swyxTV'
export const POST_CATEGORIES = (env.PUBLIC_POST_CATEGORIES || 'Blog').split(',');

export const APPROVED_POSTERS_GH_USERNAME = (env.PUBLIC_APPROVED_POSTERS_GH_USERNAME || GH_USER_REPO.split('/')[0]).split(',');
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;

// GH_TOKEN if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
