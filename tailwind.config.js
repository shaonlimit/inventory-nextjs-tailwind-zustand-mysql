/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			'xs': '16em',
			'sm': '32em',
			'md': '48em',
			'lg': '64em',
			'xl': '80em',
			'3xl': '112em',
			'4xl': '128em',
			'5xl': '144em',
			'6xl': '160em',
			'7xl': '176em',
		},
		fontFamily: {
			nunito: "'Nunito', sans-serif",
			poppins: "'Poppins', sans-serif",
		},
		extend: {
			colors: {
				primary: {
					100: '#BBBE64',
					200: '#EAF0CE',
					300: '#C0C5C1',
					400: '#7D8491',
					500: '#443850',
				},
			},
		},
	},
	plugins: [],
}
