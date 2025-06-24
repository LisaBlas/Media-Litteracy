/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: { // Add new colors section
        'neon-cyan': '#22d3ee',
        'editorial-orange': '#6F1D1B',
        brutalist: {
          background: '#121212', // Very dark background
          text: '#FFFFFF',       // Pure white text
          'accent-red': 'oklch(51.4% 0.222 16.935)', // Tailwind red-600
          'block-dark': '#1F2937', // slate-800 for contrasting blocks
          'shadow-hard': '#000000', // Black for hard shadows
        }
      },
      boxShadow: { // Add custom hard shadows
        'hard-sm': '2px 2px 0px theme(colors.brutalist.shadow-hard)',
        'hard-md': '4px 4px 0px theme(colors.brutalist.shadow-hard)',
        'hard-lg': '6px 6px 0px theme(colors.brutalist.shadow-hard)',
        'hard-accent-sm': '2px 2px 0px theme(colors.brutalist.accent-red)',
        'hard-accent-md': '4px 4px 0px theme(colors.brutalist.accent-red)',
        'hard-accent-lg': '6px 6px 0px theme(colors.brutalist.accent-red)',
      }
    },
  },
  plugins: [],
}
