/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif", // Adds a new `font-nunito` class
      }
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["light"],
  },

}

