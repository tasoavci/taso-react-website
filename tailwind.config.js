/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "taso-10": "#2B2D42",
        "taso-20": "#8D99AE",
        "taso-30": "#EDF2F4",
        "taso-40": "#EF8354",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        softwaretext: "url('./assets/SOFTWARE.png')"
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        lg: "1024px",
        xl: "1536px",

      },
    },
  },
  plugins: [],
}