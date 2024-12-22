/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bigShoulder: "Big Shoulders Display",
        roboto: "Roboto Condensed",
        playfair: "Playfair Display",
        poppins: "Poppins"
      }
    },
    animation: {
      fade: "fade 6s ease-in-out infinite"
    },
    keyframes: {
      fade: {
        "0%, 10%" : {opacity: "0"},
        "11% , 90%" : {opacity: "1"},
        "100%": {transform: "0"}
      }
    }
  },
  plugins: [],
}
