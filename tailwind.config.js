/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'hailor-black': '#050505',
        'hailor-navy': '#001A3D',
        'hailor-cobalt': '#0044CC',
        'hailor-white': '#F2F2F2',
      },
      letterSpacing: {
        tight: '-0.02em',
        tightest: '-0.06em',
      },
    },
  },
  plugins: [],
}
