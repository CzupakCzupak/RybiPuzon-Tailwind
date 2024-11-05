/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        100: "100%",
      },
      maxWidth: {
        1260: "1260px",
      },
      colors: {
        black: "#060505",
        grey: "#9b9b9b",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
