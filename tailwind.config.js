/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepOlive: '#3E4738',
        softBg: '#F3F5F7',
        mutedBlue: '#A7C5DA',
        deepBlue: '#38669D',
        softBlue: '#6590B9',
        naturalOlive: '#888C5C',
        neutralGray: '#A8AAAA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
        }
