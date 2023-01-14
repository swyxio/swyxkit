// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { ssp } from "sveltekit-search-params/plugin";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [ssp(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		exclude: ['lz-string']
	}
};

export default config;
