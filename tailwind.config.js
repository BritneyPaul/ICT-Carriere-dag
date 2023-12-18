/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#262E37',
        'lightblue': '#00A5B8',
        'lightgray': '#DEE0E8',
      },
      fontFamily: {
        'sans': ['"GT Walsheim Pro"', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        'sm':{'min': '280px', 'max': '374px'},
        // => @media screen and (min-width:280px) and (max-width:360px){
        'md': { 'min': '375px', 'max': '812px' },
        // => @media screen and (min-width: 375px) and (max-width:802px){

        'lg': { 'min': '813px', 'max': '1023px' },
        // => @media screen and (min-width:820px)and (orientation: portrait){

        'xl': { 'min': '1024px', 'max': '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        '2xl': { 'min': '1280px', 'max': '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        // '3xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

