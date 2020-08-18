const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        mono: ['Anonymous Pro', ...defaultTheme.fontFamily.mono],
      },
      opacity: {
        '90': '.9',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
};
