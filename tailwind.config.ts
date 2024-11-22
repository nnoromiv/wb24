import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";


const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "linear-gradient(140deg, #c80000 0%, #620000 50%, #ffffff 100%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        'moveIn': "1s ease-in moveIn forwards",
        'shake': "2s shake",
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      width: {
        'full-minus-56': 'calc(100% - 14rem)',
        'full-minus-20': 'calc(100% - 5rem)',
      },
      colors: {
        "black": "rgb(30, 30, 30)",
        "blackLight": "rgb(30, 30, 30, 0.4)",
        "primary": "rgb(200, 0, 0)",
        "primaryLight": "rgb(200, 0, 0, 0.4)",
        "bgPrimary": "rgba(200, 0, 0, 0.01)",
        "sideBarPrimary": "rgba(200, 0, 0, 0.06)",
        "darkBgPrimary": "rgba(200, 0, 0, 0.03)",
        "greyOff": 'rgb(211, 211, 211)',
        "grey": "rgb(217, 217, 217)",
        "success": "rgb(0, 128, 0)",
        "greenLightest": "rgba(0, 128, 0, 0.1)",
        "white": "rgb(255, 255, 255)",
        "deepBlack": "rgb(0, 0, 0)",
        "orange": "rgb(242, 72, 34)",
        "orangeLightest": "rgba(242, 72, 34, 0.1)",
        "orangeLineLight": "rgba(242, 72, 34, 0.3)",
        "graphBg": "rgb(248, 242, 242)",
        "darkGraphBg": "rgb(86, 86, 86)",
        "graphLine": "rgb(230, 175, 175)",
        "blue": "rgb(0, 35, 123)",
        "blueLight": "rgb(0,35,123, 0.4)",
        "yellow": "rgb(255, 255, 0)",
        "yellowLight": "rgb(255, 255, 0, 0.4)",
        "pending": "rgb(255, 168, 0)",
        "sunColor": "rgb(255, 199,0)",
        "tableHead": "rgba(200, 0, 0, 0.11)",
        "darkTableHead": "rgba(200, 0, 0, 0.07)",
        "tableColorI": "rgba(243, 239, 235, 0.62)",
        "dateColor": "rgb(144, 139, 120)"
      },
      screens: {
        'lt': '1024px',
        'tb': '769px',
        'pn': '470px',
        'sm-pn': '426px',
        'xs-pn': '321px'
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "rgb(30, 30, 30)"
          }
        }
      }
    }),
  ],
};


export default config;
