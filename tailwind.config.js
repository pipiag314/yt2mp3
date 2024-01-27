/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sanss: ["sans-serif"],
        Yanone: ["Yanone Kaffeesatz"],
      },
      colors: {
        primary: "white",
        secondary: "#BCBCBC"
      }
    },
  },
  plugins: [],
};
