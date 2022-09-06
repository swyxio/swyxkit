import { env } from '$env/dynamic/public'

// You can edit the config directly by changing this values
// or pass it via environment variable
// all env variables starts with PUBLIC_ except GH_TOKEN
const PUBLIC_SITE_URL ='https://swyxkit.netlify.app'
const PUBLIC_GH_USER_REPO ='sw-yx/swyxkit'
const PUBLIC_SITE_TITLE ='SwyxKit'
const PUBLIC_SITE_DESCRIPTION ="swyx's default SvelteKit + Tailwind starter"
const PUBLIC_DEFAULT_OG_IMAGE ='https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png'
const PUBLIC_MY_TWITTER_HANDLE ='swyx'
const PUBLIC_MY_YOUTUBE ='https://youtube.com/swyxTV'
const PUBLIC_POST_CATEGORIES = 'Blog'

export const SITE_URL = env?.PUBLIC_SITE_URL || PUBLIC_SITE_URL
export const GH_USER_REPO = env?.PUBLIC_GH_USER_REPO || PUBLIC_GH_USER_REPO
export const SITE_TITLE = env?.PUBLIC_SITE_TITLE || PUBLIC_SITE_TITLE
export const SITE_DESCRIPTION = env?.PUBLIC_SITE_DESCRIPTION || PUBLIC_SITE_DESCRIPTION
export const DEFAULT_OG_IMAGE = env?.PUBLIC_DEFAULT_OG_IMAGE || PUBLIC_DEFAULT_OG_IMAGE
export const MY_TWITTER_HANDLE = env?.PUBLIC_MY_TWITTER_HANDLE || PUBLIC_MY_TWITTER_HANDLE
export const MY_YOUTUBE = env?.PUBLIC_MY_YOUTUBE || PUBLIC_MY_YOUTUBE
export const POST_CATEGORIES = (env?.PUBLIC_POST_CATEGORIES || PUBLIC_POST_CATEGORIES).split(',');

export const APPROVED_POSTERS_GH_USERNAME = (env?.PUBLIC_APPROVED_POSTERS_GH_USERNAME || GH_USER_REPO.split('/')[0]).split(',');
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
