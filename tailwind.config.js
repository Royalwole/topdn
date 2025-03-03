/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#981725',
          light: '#b83240',
          dark: '#7a1220',
        },
        secondary: 'rgb(148, 55, 66)',
        dark: '#1e293b',
        light: '#f8fafc',
        success: '#22c55e',
        warning: '#eab308',
        error: '#dc2626',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #981725 0%, rgb(148, 55, 66) 100%)',
      },
      backgroundColor: {
        overlay: 'rgba(152, 23, 37, 0.05)',
      },
    },
  },
  plugins: [],
}
