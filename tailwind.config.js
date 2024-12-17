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
  },
  plugins: [],
}
