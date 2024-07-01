/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-500': '#00A8DC',
      'blue-700': '#00485F',
      'white': '#FFFFFF',
      'black': '#0D0D0D',
      
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, #00A8DC, #00485F)',
    },
  },
  plugins: [],
}