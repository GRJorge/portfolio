/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      dark: {
        100: "#504945",
        200: "#3C3836",
        300: "#282828",
        400: "1D2021",
      },
      light: "#EBDBB2",
      primary: "#8EC07C",
      secondary: "D3869B",
      green: "B8BB26",
    },
    extend: {},
  },
  plugins: [],
};
