/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f4f2ec",
        paper: "#faf9f5",
        ink: "#181712",
        lime: {
          accent: "#c7f24a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        "blob-drift-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "blob-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-35px, 25px) scale(1.05)" },
          "66%": { transform: "translate(25px, -30px) scale(0.92)" },
        },
        "blob-drift-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, 35px) scale(1.1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "blob-drift-1": "blob-drift-1 18s ease-in-out infinite",
        "blob-drift-2": "blob-drift-2 22s ease-in-out infinite",
        "blob-drift-3": "blob-drift-3 15s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
