/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkblue':'#262E37',
        'lightblue':'#00A5B8',
        'lightgray':'#DEE0E8',
      },
      fontFamily:{
        'sans': ['"GT Walsheim Pro"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

