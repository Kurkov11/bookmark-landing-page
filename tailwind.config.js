/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ './docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)'
      },
      inset: {
        "-20px": "-20px"
      },
      borderWidth: {
        "0.5px": "0.5px"
      },
      padding: {
        'generalPadding': '2rem'
      }
    }
  },
  plugins: [],
}

