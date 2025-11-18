/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vo-white': '#f9fafb',
        'vo-black': '#0b1626',
        'vo-black-soft': '#111c2b',
        'vo-blue': '#1f7dd6',
        'vo-blue-soft': '#d3ebff',
        'vo-muted': '#6b7a90',
        'vo-border': '#d8dee8',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(31, 125, 214, 0.15)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
