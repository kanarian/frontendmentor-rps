/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {    
      colors:{
        dark:'hsl(229, 25%, 31%)',
        score:'hsl(229, 64%, 46%)',
        headerOutline:'hsl(217, 16%, 45%)',
    },},
  },
  plugins: [],
}
