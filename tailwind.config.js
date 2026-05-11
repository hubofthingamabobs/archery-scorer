/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        range: {
          950: '#071910',
          900: '#0a1f12',
          800: '#0f2d1a',
          700: '#1a3d2b',
          600: '#1e4d2b',
        },
        gold: {
          400: '#ffd700',
          500: '#d4a017',
          600: '#b8860b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
