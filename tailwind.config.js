/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black": "#1E2832",
        "primayBG" : "#1e28320d"
      },
      fontFamily : {
        'primary': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

