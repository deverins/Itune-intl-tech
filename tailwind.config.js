/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.montserrat-regular': {
          fontFamily: 'Montserrat, sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: '400',
          fontStyle: 'normal',
        },
        '.montserrat-bold': {
          fontFamily: 'Montserrat, sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: '700',
          fontStyle: 'normal',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
