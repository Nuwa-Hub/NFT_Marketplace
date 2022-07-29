/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  'white': '#ffffff',
		  'purple': '#3f3cbb',
		  'midnight': '#121063',
		  'metal': '#565584',
		  'tahiti': '#3ab7bf',
		  'silver': '#ecebff',
		  'bubble-gum': '#ff77e9',
		  'bermuda': '#78dcca',
		  'Fuchsia':'#d946ef',
		},
		boxShadow: {
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
		  },
		  borderWidth: {
			DEFAULT: '1px',
			'0': '0',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'10': '10px',
		  }
	  },
	plugins: [],
};
