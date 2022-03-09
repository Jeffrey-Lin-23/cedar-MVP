module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "1rem",
        screens:{
          lg: "1124px",
          xl: "1124px",
        },
      },
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
