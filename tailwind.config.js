module.exports = {
  mode: "jit",
  purge: ['./public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
      fontFamily: {
        "inconsolata": ['Inconsolata', "monospace"],
        "montserrat": ['Montserrat', "sans-serif"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
