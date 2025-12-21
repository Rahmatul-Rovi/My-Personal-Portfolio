/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Eita thik moto na thakle design pabe na
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // DaisyUI add koro
}