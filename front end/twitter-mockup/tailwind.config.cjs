/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#264653',
          200:'#2A9D8F',
          300:'#E9C46A',
          400:'#F4A261',
          500:'#E76F51',
          white:'#eee',
          black:'#111',
        },
        secondary:{
          100:'#606C38',
          200:'#283618',
          300:'#FEFAE0',
          400:'#DDA15E',
          500:'#BC6C25',
        }
      }
    },
  },
  plugins: [],
}
