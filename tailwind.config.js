/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        someColor: "#1ECD8D",
        bgColor: "#182527",
      },
    },
  },
  plugins: [],
};
