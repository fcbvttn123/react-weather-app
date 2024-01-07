/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '2/10': '20%',
        '3/10': '33.333%',
      }, 
      flexGrow: {
        2: '2'
      }
    },
    screens: {
      "maxWidth680px": {"max": "680px"}
    }
  },
  plugins: [],
}

