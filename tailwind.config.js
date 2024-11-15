/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#212021',
      },
      height: {
        'section-large': '100vh',
        'section-normal': '60vh',
      },
    },
  },
  plugins: [],
} 