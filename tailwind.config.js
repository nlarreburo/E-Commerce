/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    mytheme: {

    },
  },
  plugins: [require("daisyui")],
}
