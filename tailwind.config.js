/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
}

