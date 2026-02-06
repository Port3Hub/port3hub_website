/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gh-bg': '#ffffff',
        'gh-text-primary': '#24292f',
        'gh-text-secondary': '#57606a',
        'gh-border': '#d0d7de',
        'gh-accent': '#0969da',
        'gh-accent-hover': '#0550ae',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
