/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ './docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        grayishWhite: 'hsl(0, 0%, 97%)',
        softRed: 'hsl(0, 94%, 66%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.8)'
      },
      inset: {
        "-20px": "-20px"
      },
      borderWidth: {
        'option-border-width': '0.5px'
      },
      padding: {
        'generalSidePadding': '2rem'
      },
      fontFamily: {
        'rubik': 'rubik'
      },
      fontSize: {
        '15px': '15px'
      }
    }
  },
  plugins: [],
}

