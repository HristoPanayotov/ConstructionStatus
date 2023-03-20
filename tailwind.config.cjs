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
        'button-orange': '#E6B17E',
        'button-orange-hover': '#C68342',
        'dark-blue': '#36454F',
        'button-blue': '#0275D8',
        'button-blue-hover': '#0060B3'
      }
    },
  },
  plugins: [],
}