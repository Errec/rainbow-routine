import type { Config } from 'tailwindcss';
import { colors, fontSizes } from './src/theme';

const config: Config = {
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

export default config;
