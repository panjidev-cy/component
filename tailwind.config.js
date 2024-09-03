/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'manrope': ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark': '#0e0741',
        'light': '#ffffff',
        'primer' : '#8236fd',
        'secundary': '#ababb9',
      },
    },
  },
  plugins: [],
}

