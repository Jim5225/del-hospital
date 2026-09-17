/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          navy: '#0B192C',
          slate: '#1E293B',
          blue: '#1E40AF',
          lightBlue: '#3B82F6',
          sky: '#E0F2FE',
          teal: '#0D9488',
          tealDark: '#0F766E',
          emerald: '#059669',
          alert: '#DC2626',
          warning: '#D97706',
          bgLight: '#F8FAFC',
          cardBorder: '#E2E8F0',
        }
      },
      fontFamily: {
        bengali: ['"Hind Siliguri"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 25, 44, 0.08)',
        'elevated': '0 10px 30px -5px rgba(11, 25, 44, 0.12)',
        'glow': '0 0 25px rgba(30, 64, 175, 0.25)',
      }
    },
  },
  plugins: [],
}
