const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Anonymous Pro', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
};
