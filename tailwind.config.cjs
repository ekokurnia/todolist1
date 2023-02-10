/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0f172a",
        overlay: "rgb(0 0 0)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
