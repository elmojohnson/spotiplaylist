/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#278AB0",
        secondary: "#1C4670",
        accent: "#1DC690",
        base: "#EAEAE0",
        muted: "#9ca3af"
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
