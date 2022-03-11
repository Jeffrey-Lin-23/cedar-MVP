module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': "1124px",
      'xl': "2000px",
    },
    extend: {
      container:{
        center: true,
        padding: "1rem",
        screens:{
          'lg': "1124px",
          'xl': "2000px",
        },
      },
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
