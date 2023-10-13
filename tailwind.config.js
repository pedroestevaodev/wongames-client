import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
	darkMode: ['class', '[data-theme-mode="dark"]'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {},
	plugins: [
		nextui({
			prefix: 'nextui',
			addCommonColors: false,
			defaultTheme: 'light',
			defaultExtendTheme: 'light',
			layout: {},
			themes: {
				light: {
					layout: {},
					colors: {}
				},
				dark: {
					layout: {},
					colors: {}
				}
			}
		})
	]
};

export default tailwindConfig;
