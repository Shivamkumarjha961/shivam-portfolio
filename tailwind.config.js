/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712',      // Deep slate black
          card: '#0c1020',    // Rich dark glass blue-grey card
          border: '#1e293b',  // Subtle deep border
          text: '#f3f4f6',    // Bright off-white text
          muted: '#9ca3af',   // Secondary grey text
          glow: '#1d4ed8',    // Slate blue glow
        },
        light: {
          bg: '#f8fafc',      // Soft, clean grey-white
          card: '#ffffff',    // Crisp white card
          border: '#e2e8f0',  // Soft light border
          text: '#0f172a',    // Deep slate text
          muted: '#64748b',   // Slate secondary text
        },
        brand: {
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
          teal: '#14b8a6',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'glowing': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.1), 0 0 10px rgba(6, 182, 212, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(99, 102, 241, 0.4), 0 0 25px rgba(99, 102, 241, 0.2)' },
        }
      },
    },
  },
  plugins: [],
}
