/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: '#00A0FF',
      sky: '#E8F9FF',
      ghost: '#F8F8FF',
      grass: '#A5CD39',
      black: '#000'
    }
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'bg-sky',
    'bg-ghost',
    'bg-grass',
    'bg-black'
  ]
}
