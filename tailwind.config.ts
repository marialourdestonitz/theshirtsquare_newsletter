import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "outline-gray-focus": "inset 0 0 0 1.5px #96bad3",
        "outline-gray": "inset 0 0 0 1.5px #525252",
      },
      animation:{
        "title": "title 1s ease-out forwards",
        "fade-in": "fade-in 4s ease-in-out forwards",
        "fade-top": "fade-top 4s ease-in-out forwards",
        "fade-bottom": "fade-bottom 2s ease-in-out forwards",
        'moveToCorner': 'moveToCorner 2s forwards',
      },
      keyframes:{
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        "fade-bottom": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-top": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0)"
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "moveToCorner": {
          'to': {
            'top': '0',
            'left': '10vw',
            'transform': 'translateX(0%) translateY(0%)',
          },
        },
      }
    },
  },
  plugins: [],
}
export default config
