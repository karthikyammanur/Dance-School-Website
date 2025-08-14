/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAF5EF',
        'maroon': '#7F1D1D',
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        'serif': ['Playfair Display', ...defaultTheme.fontFamily.serif],
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
