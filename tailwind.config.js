/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'sm': {max:'640px'},
      // => @media (min-width: 640px) { ... }

      'smm': {max:'340px'},
      // => @media (min-width: 640px) { ... }

      'md': {max:'768px'},
      // => @media (min-width: 1024px) { ... }
      'mdd': {max:'1024px'},
      'lg':{max:'1280px'},
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

