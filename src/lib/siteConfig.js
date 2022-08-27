import { 
	PUBLIC_SITE_URL,
	PUBLIC_APPROVED_POSTERS_GH_USERNAME,
	PUBLIC_GH_USER_REPO,
	PUBLIC_SITE_TITLE,
	PUBLIC_SITE_DESCRIPTION,
	PUBLIC_DEFAULT_OG_IMAGE,
	PUBLIC_MY_TWITTER_HANDLE,
	PUBLIC_MY_YOUTUBE,
	PUBLIC_POST_CATEGORIES
} from '$env/static/public';

export const SITE_URL = PUBLIC_SITE_URL;
export const APPROVED_POSTERS_GH_USERNAME = PUBLIC_APPROVED_POSTERS_GH_USERNAME.split(',');
export const GH_USER_REPO = PUBLIC_GH_USER_REPO;
export const SITE_TITLE = PUBLIC_SITE_TITLE;
export const SITE_DESCRIPTION = PUBLIC_SITE_DESCRIPTION;
export const DEFAULT_OG_IMAGE = PUBLIC_DEFAULT_OG_IMAGE;
export const MY_TWITTER_HANDLE = PUBLIC_MY_TWITTER_HANDLE;
export const MY_YOUTUBE = PUBLIC_MY_YOUTUBE;
export const POST_CATEGORIES = (PUBLIC_POST_CATEGORIES || 'Blog').split(',');
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;

// GH_TOKEN if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
