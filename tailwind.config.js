/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans':['Inter', 'sans-serif']
      },
      screens: {
        'xs': '480px',  // Sizning kerakli breakpoint qiymatingiz
        'ms':'350px'
      },
    },
  },
  plugins: [tailwindScrollbar],
}

