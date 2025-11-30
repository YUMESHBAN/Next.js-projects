/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        cream: '#F7F2EA',
        charcoal: '#0E0E11',
        graphite: '#1E1E23',
        accent: '#FFD84D',
        muted: '#6F6F75',
        border: '#E0DAD0',
        // Dark mode colors
        'dark-bg': '#0E0E11',
        'dark-surface': '#1E1E23',
        'dark-text': '#F7F2EA',
        'dark-border': '#3A3A3F',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
      boxShadow: {
        card: '0 20px 80px rgba(14,14,17,0.08)',
      },
    },
  },
  plugins: [],
}
