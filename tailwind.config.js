/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ './docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
        transparentVeryDarkBlue: 'hsla(229, 31%, 21%, 0.90)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        grayishWhite: 'hsl(0, 0%, 97%)',
        softRed: 'hsl(0, 94%, 66%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.8)'
      },
      inset: {
        "-20px": "-20px",
        "2.8rem": "2.8rem",
        "4.2rem": "4.2rem",
        "5.8rem": "5.8rem",
        "8.9rem": "8.9rem"
      },
      spacing: {
        "60px": "60px",  //To center the red selector-line which has a width of 120px
        "125px": "125px"  //To position the desktop version of red line on the left side
      },
      borderWidth: {
        'option-border-width': '0.5px'
      },
      padding: {
        'generalSidePadding': '2rem',
        'generalSidePaddingDesktop': '10rem'
      },
      fontFamily: {
        'rubik': 'rubik'
      },
      fontSize: {
        '15px': '15px',
        '18px': '18px'
      },
      letterSpacing: {
        '0.2em': '0.2em'
      },
      screens: {
        'desktop': '1300px'
      },
      minWidth: {
        '50vw': '50vw'
      },
      maxWidth: {
        '550px': '550px'
      }
    }
  },
  plugins: [],
}

