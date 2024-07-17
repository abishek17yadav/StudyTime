/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  variants:{
    extend:{
      display:["focus-group"]
    }
  }
 
}

