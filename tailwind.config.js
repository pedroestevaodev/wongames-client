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
	theme: {
		extend: {
			backgroundColor: {
				light: '#f3f3f3',
				dark: '#0b0b0c'
			},
			spacing: {
				18: '4.5rem'
			},
			fontFamily: {
				sans: ['"Poppins"', 'sans-serif']
			},
			colors: {
				blue: {
					600: '#006FF9'
				}
			}
		},
		screens: {
			xs: '375px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
			'max-xs': { max: '374px' },
			'max-sm': { max: '575px' },
			'max-md': { max: '767px' },
			'max-lg': { max: '991px' },
			'max-xl': { max: '1199px' },
			'max-xxl': { max: '1399px' }
		},
		logo: {
			light: '#FAFAFA',
			dark: '#0A0D27'
		}
	},
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
