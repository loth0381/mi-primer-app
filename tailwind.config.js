/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#080A1A',
        subMain:'#F20000',
        dry:'#0B0F29',
        star:''
      }
    },
  },
  plugins: [],
}