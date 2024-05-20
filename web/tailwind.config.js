const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,public}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    "../node_modules/flowbite/**/*.{js,css}",
    "../node_modules/flowbite-react/dist/**/*.{mjs,cjs}",
  ],
  theme: {
    colors: {
      accent: "#059669",
      background: "#171717",
      foreground: "#fafafa",
    },
    extend: {
      zIndex: {
        '-100': '-100',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};