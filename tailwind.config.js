/** @type {import('tailwindcss').Config} */
import colors, { yellow, pink } from "tailwindcss/colors";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
  colors: {
    ...colors,
    primary: yellow,
    secondary: pink,
  },
};
export const plugins = [];
