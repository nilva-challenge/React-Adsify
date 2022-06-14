/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
      "sidebarBG":"#584fd8",
      "headerBG":"#ffb6a7"
    },
    extend: {
      height: {
        '300': '300px',
      },
      width: {
        '300': '300px',
      },
    },
  },
  plugins: [],
}
