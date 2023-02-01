/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '14400px',
    },
    extend: {
      colors: {}
    },
  },
  plugins: [],
}
