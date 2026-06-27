/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#666666",
        border: "#e5e5e5",
        surface: "#fafafa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
