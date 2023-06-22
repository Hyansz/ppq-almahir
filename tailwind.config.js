/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
    plugin(function({addBase, theme}) {
      addBase({
        h1: {fontSize: theme("fontSize.2xl")},
        h2: {fontSize: theme("fontSize.xl")},
        h3: {fontSize: theme("fontSize.lg")},
        p: {fontSize: theme("fontSize.sm")},
      })
    })
  ],
}

