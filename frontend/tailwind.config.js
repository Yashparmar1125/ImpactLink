/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#1e40af',
        accent: '#3b82f6',
        custom: {
          blue: '#1e3a8a',
          'blue-dark': '#1e40af',
          'blue-light': '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Urbanist', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
