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
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};