/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        customRed: '#EB0000', // Custom red color
        customBlue: '#007BFF', // Custom blue color
        customGreen: '#00FF00', // Custom green color
      },
    },
  },
  plugins: [],
}