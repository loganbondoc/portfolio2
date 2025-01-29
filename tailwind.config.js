const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,scss}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx,scss}",
    "./node_modules/@heroui/theme/dist/components/(card|chip|tabs|ripple).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
    // colors: {
    //   primary: "#4c9eed", // Ensure this matches your custom primary color
    // },
  },
  darkMode: "class",
  plugins: [
    heroui({
      // addCommonColors: true, // Adds common colors like "primary", "secondary", etc.
      layout: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      themes: {
        light: {
          colors: {
            background: "F8F8FF",
            primary: {
              DEFAULT: "#4C9EED",
            }, // Custom primary color
            // "main-blue": "#4c9eed",
            "light-blue": "#87cffb", // Custom light-blue color
            // grey: "#EFEFEF",
            // "ghost-white": "#F8F8FF",
            // "medium-grey": "#A7A7A7",
            // "light-grey": "#d9d9d9",
            // black: "#242424",
          },
        },
      },
    }),
  ],
};
