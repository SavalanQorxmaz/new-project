/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
   theme: {
    extend: {
    },
    screens: {
      xs: { max: '576px' },
      sm: { min: '577px', max: '768px' },
      md: { min: '769px', max: '992px' },
      lg: { min: '993px', max: '1200px' },
      xl: { min: '1201px' }

    },
    container: {
      // padding: '[0.2 rem]'
    }
  

    
  },
  corePlugins: {
    // container: false,
    // screens: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: 'auto',
          maxWidth: '80%',
          '@screen xs': {
            maxWidth: '98%',
          },
          '@screen sm': {
            maxWidth: '94%',
          },
          '@screen md': {
            maxWidth: '90%',
          },
          '@screen lg': {
            maxWidth: '85%',
          },
          '@screen xl': {
            maxWidth: '80%',
          },
        }
      })
    }
  ],

}