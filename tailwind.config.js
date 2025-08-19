/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        ivory: '#FFFFF0',
        charcoal: '#36454F'
      }
    },
  },
  plugins: [],
}
