/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
      screens: {
        'lg': {'max': '1023px'},
        'xl': {'max': '1279px', 'min': '1024px'},
        'md': {'max': '850px', },
         'sm':{'max':'375px ', }
      },
      
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        grey: "rgb(var(--color-grey-rgb) / <alpha-value>)",
        orange: "rgb(var(--color-orange-rgb) / <alpha-value>)",
        white: "rgb(var(--color-white-rgb) / <alpha-value>)",
        red: "rgb(var(--color-red-rgb) / <alpha-value>)",
        "red-light": "rgb(var(--color-red-light-rgb) / <alpha-value>)",
        black: "rgb(var(--color-black-rgb) / <alpha-value>)",
        green: "rgb(var(--color-green-rgb) / <alpha-value>)",
        pink: "rgb(var(--color-pink-rgb) /<alpha-value>)",
        purple: "rgb(var(--color-purple-rgb) / <alpha-value>)",
        greyishblue: "rgb(var(--color-greyishblue-rgb)/ <alpha-value>)",
        "grey-secondary": "rgb(var(--color-grey-secondary-rgb)/<alpha-value>)",
        secondarylight:"rgb(var(--color-secondarylight-rgb)/<alpha-value>)",
        Turquoise:"rgb(var(--color-Turquoise-rgb)/<alpha-value>)",
       martinique:"rgb(var(--color-martinique-rgb)/<alpha-value>)"
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "page-container-background":
          'url("/public/images/background-image.jpg")',
      },
      backgroundClip: {
        text: "text"
      }
    },
  },
};
