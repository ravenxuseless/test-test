/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#08070d",
          soft: "#0d0b14",
          card: "#13101c",
        },
        accent: {
          DEFAULT: "#a855f7",
          glow: "#c084fc",
          deep: "#6b21a8",
        },
        line: "rgba(168, 85, 247, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(168, 85, 247, 0.25)",
        "glow-strong": "0 0 60px rgba(168, 85, 247, 0.45)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
