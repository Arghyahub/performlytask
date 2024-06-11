/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // josefin: ['Josefin Sans', 'Ssans-serif'],
        // title: ['Jomhuria', 'serif'],
        popins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#003FAD",
        secondary: "#0F6CBD",
        foreground: "#FFFFFF",
        foregroundSecondary: "#F4F8FE",
        background: "#EEEEEE80",
      },
    },
  },
  plugins: [],
};
