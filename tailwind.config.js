/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      jost: ['Jost', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#F2682A'
      }
    },
  },
  plugins: [],
}