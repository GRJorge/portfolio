/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      dark: {
        100: "#504945",
        200: "#3C3836",
        300: "#282828",
        400: "#1D2021",
      },
      light: "#FBF1C7",
      primary: "#8EC07C",
      purple: "#D3869B",
      green: "#B8BB26",
      orange: "#FE8019",
      red: "#FB4934",
      blue: "#83A598",
      yellow: "#FABD2F",
    },
    fontFamily: {
      ibm: ["IBM Plex Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
