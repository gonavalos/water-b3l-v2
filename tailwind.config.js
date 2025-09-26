// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0E3A5D",
          aqua: "#0FA3B1",
          aqualight: "#5FD6D4",
        },
      },
    },
  },
  plugins: [],
};