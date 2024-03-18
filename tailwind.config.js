/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: {
      288: '72rem', // 3 * h-96
    },
    maxWidth: {
      150: '37.5rem',
      111: '27.75rem',
    },
    extend: {
      colors: {
        blueGrayClear: '#505F98',
        blueGrayDark: '#091133',
        blueGrayDarkest: '#111B47',

        blueGrayPrice: "#222F65",
        blueGrayUnderPrice: "#37447E",
        blueGraySeeOnePrice: "#5D6970",

        bgBelow: "#E7ECFF",

        grayFooterCopy: "#939EA4",
        grayFooterHr: "#CDD1D4",
        bgFooter: "#E7ECFF",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}