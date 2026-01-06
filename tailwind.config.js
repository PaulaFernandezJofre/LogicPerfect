export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neonOrange: "#FF6A00",
        neonYellow: "#FFD000",
        darkBg: "#050505",
      },
      boxShadow: {
        neon: "0 0 20px rgba(255,106,0,0.6)",
      },
    },
  },
  plugins: [],
}