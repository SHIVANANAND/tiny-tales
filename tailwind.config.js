/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tt-gold": "#c9a55b",
        "tt-dark": "#0f1724",
        "tt-teal": "#90c6b8",
      },
      borderRadius: {
        "xl-lg": "1rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
