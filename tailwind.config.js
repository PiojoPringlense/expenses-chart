/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryRed: "#EC775F",
				primaryCyan: "#76B5BC",
				neutral: { 900: "#382314", 600: "#93867B", 300: "#F8E9DD", 100: "#FFFAF5" },
			},
			fontFamily: {
				DM_Sans: ["DM Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
