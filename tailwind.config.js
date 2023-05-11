/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        midnight: {
          100: "#ced0dc",
          200: "#9ea1b9",
          300: "#6d7195",
          400: "#3d4272",
          500: "#0c134f",
          600: "#0a0f3f",
          700: "#070b2f",
          800: "#050820",
          900: "#020410"
},
      }
    },
  },
  plugins: [],
};
