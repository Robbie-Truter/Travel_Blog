/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#EDB5BF",
        "color-secondary": "#e7e5e5",
      },
    },
  },
  plugins: [],
};
