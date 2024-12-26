/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '20vh': '20vh',
      },
      screens: {
        lg: "768px"
      }
    },
  },
  plugins: [],
}