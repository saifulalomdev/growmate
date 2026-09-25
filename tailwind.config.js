/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add "./src/**/*.{js,jsx,ts,tsx}" to include your Expo Router app
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};