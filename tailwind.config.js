import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          50: '#fffbf0', 
          100: '#ffe1a8', // Soft Peach
          200: '#e1d49a',
          300: '#c9cba3', // Dry Sage
          400: '#d79b80', 
          500: '#e26d5c', // Vibrant Coral
          600: '#aa5551',
          700: '#723d46', // Wine Plum
          800: '#472d30', // Mauve Shadow
          900: '#2b1b1d', // Darker
        }
      }
    },
    fontFamily: {
      sans: ['"Anonymous Pro"', 'monospace'],
    },
  },
  plugins: [flowbite.plugin()],
};