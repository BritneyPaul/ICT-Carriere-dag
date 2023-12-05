/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
}

