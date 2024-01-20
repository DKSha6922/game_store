/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#4F6F52',
        'secondry':'#739072',
        'light-primary':'#86A789',
        'light-secondry':'#D2E3C8',
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
}

