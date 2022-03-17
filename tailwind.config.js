module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#468EF9",
        secondary: "#0C66EE",
        blue: "#2F7CF0",
        black: "#222222",
        gray: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
      }
    },
  },
  plugins: [],
}
