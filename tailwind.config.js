/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* APMA-inspired deep blue palette */
        'apma-blue': '#003087',
        'apma-blue-mid': '#1450A3',
        'apma-blue-light': '#EDF1FA',
        'apma-blue-pale': '#F4F7FD',
        /* nota.ai neutrals */
        'nota-navy': '#101218',
        'nota-dark': '#252A39',
        'nota-gray': '#7E8390',
        'nota-border': '#E7E7E7',
        'nota-bg': '#F6F6F8',
        'nota-card': '#FFFFFF',
      },
      boxShadow: {
        card: '10px 10px 28px 0 rgba(141, 141, 141, 0.15)',
        'card-hover': '10px 10px 40px 0 rgba(0, 48, 135, 0.18)',
      },
      maxWidth: {
        content: '1300px',
      },
    },
  },
  plugins: [],
}
