module.exports = {
	content: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	darkMode: 'class',
	theme: {
		extend: {
			typography: theme => ({
				DEFAULT: {
					css: {
            '--tw-prose-bullets': theme('colors.black'),
					}
				}
			})
		}
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
};
