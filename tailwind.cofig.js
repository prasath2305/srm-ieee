export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f8ff",
          100: "#e3efff",
          200: "#c7ddff",
          300: "#a3c5ff",
          400: "#7fb3ff", // <-- primary pastel
          500: "#4e8fff",
          600: "#2d6de0",
          700: "#1c4ebb",
          800: "#153b8f",
          900: "#0f2a66",
        }
      }
    }
  }
}
