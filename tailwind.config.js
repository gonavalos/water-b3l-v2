// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0E3A5D",
          navydark: "#06111e",
          navymid: "#0d2235",
          aqua: "#0FA3B1",
          aqualight: "#5FD6D4",
          aquamuted: "#0c4a6e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-teal": "linear-gradient(90deg, #5FD6D4, #0FA3B1)",
        "gradient-navy": "linear-gradient(135deg, #0E3A5D, #06111e)",
      },
    },
  },
  plugins: [],
};