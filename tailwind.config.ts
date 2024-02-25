import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black/text": "#324057",
        whitebg: "#F6FCFF",
        white: "#FFFFFF",
        "green/100": "#1A9D8C",
        "green/500": "#093731",
        yellow: "#ffcd00",
        grey: "#A4A4A4",
        redlinear: "#FF4242",
        "black/light": "#797979",
        orange: "#FFAB2D66",
        "orange-text": "#DB8300",
        green: "#33AA5B",
        "green-text": "#33AA5B",
        red: "#FF3D3D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }: any) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.semibold"),
        },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#1A9D8C",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
  darkMode: "class",
};
export default config;
