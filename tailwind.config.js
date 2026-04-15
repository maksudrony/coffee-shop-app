/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#C67C4E",
        secondary: "#EDD6C8",
        dark: "#313131",
        light: "#F9F9F9",
        blackText: "#2F2D2C",
        grayText: "#9B9B9B",
        border: "#EAEAEA",
      },
    },
  },
  plugins: [],
}
