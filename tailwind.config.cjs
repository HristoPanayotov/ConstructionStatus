/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'default-grey': '#EDEDED',
        'button-orange': '#E6B17E'
      }
    },
  },
  plugins: [],
}