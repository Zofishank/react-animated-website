/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
     abc: ["Oswald"],
     poppins : ["Poppins"],
     roboto : ["Roboto"]
    }
  },
  plugins: [],
}

