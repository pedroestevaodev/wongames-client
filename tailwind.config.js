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
				xxsmall: '0.8rem',
				xsmall: '1.6rem',
				small: '2.4rem',
				medium: '3.2rem',
				large: '4.0rem',
				xlarge: '4.8rem',
				xxlarge: '5.6rem',
				container: '130rem',
				gutter: '3.2rem'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			fontSize: {
				xsmall: '1.2rem',
				small: '1.4rem',
				medium: '1.6rem',
				large: '1.8rem',
				xlarge: '2.0rem',
				xxlarge: '2.8rem',
				huge: '5.2rem'
			},
			fontWeight: {
				light: 300,
				normal: 400,
				bold: 600
			},
			colors: {
				primary: '#F231A5',
				secondary: '#3CD3C1',
				mainBg: '#06092B',
				lightBg: '#F2F2F2',
				white: '#FAFAFA',
				black: '#030517',
				lightGray: '#EAEAEA',
				gray: '#8F8F8F',
				darkGray: '#2E2F42',
				red: '#FF6347',
				orange: '#FF5F5F',
				pink: '#F062C0'
			},
			borderRadius: {
				4: '0.4rem'
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
