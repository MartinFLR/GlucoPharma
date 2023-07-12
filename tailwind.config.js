/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animated"),
    require('preline/plugin'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};