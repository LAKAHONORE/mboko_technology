/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        colorOrange : "#FE895E",
        colorWhite : "#FFF6F2",
        colorDark : "#171717",
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        'md': '4px 4px 6px rgba(0, 0, 0, 0.4)',
        'lg': '6px 6px 8px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require("daisyui"),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '6px 6px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

