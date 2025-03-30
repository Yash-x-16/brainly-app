/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      purple:{
        300:"#e0e7fe",
        500:"#3e38a7" ,
        600:"#5046e4"
      }, 
      blue:{
        200:"#d9ddee" ,
        500:"#9492db",
        600:"#7164c0"
      } ,
     gray:{
      100:"#efefed",
      200:"#e6e9ed",
      600:"#95989c", 
      300:"#ebebeb"
      }
    },
  },
  plugins: [],
}

