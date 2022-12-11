// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { ssp } from "sveltekit-search-params/plugin";
import fs from 'fs'
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [ssp(), sveltekit(), rawFonts(['.ttf'])],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;

function rawFonts(ext) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(code, id) {
			if (ext.some(e => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		}
	};
}