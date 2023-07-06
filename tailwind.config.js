/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [ require( "tw-elements/dist/plugin.cjs" ) ]
}

