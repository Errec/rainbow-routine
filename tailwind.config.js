const { colors, fontSizes } = require('./src/theme');

module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontFamily: {
        rmono: ['Roboto-Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
