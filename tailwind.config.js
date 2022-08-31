/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {    
      backgroundImage: {
        radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'radial-at-t':
          'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'radial-at-b':
          'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'radial-at-l':
          'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'radial-at-r':
          'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'radial-at-tl':
          'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'radial-at-tr':
          'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'radial-at-bl':
          'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'radial-at-br':
          'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
      },
      colors:{
        backgroundGrad:{
          from:'hsl(214, 47%, 23%)',
          to:'hsl(237, 49%, 15%)',
        },
        dark:'hsl(229, 25%, 31%)',
        score:'hsl(229, 64%, 46%)',
        whiteBackground:{
          light:'#f9faf6',
          dark:'#bcc0d3',
        },
        headerOutline:'hsl(217, 16%, 45%)',
        paperGrad:{
          light:'hsl(230, 89%, 65%)', 
          dark:'hsl(230, 89%, 62%)',
        },
        scissorsGrad:{
          light:'hsl(40, 84%, 53%)',
          dark:'hsl(39, 89%, 49%)',
        },
        rockGrad:{
          light:'hsl(349, 70%, 56%)',
          dark:'hsl(349, 71%, 52%)',
        },
        cyanIconShadow:'hsl(189, 59%, 53%)',
        connectorBar:'#14223c'
      },
    },
  },
  plugins: [],
}
