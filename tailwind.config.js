/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "5px 5px 0px rgb(0, 0, 0)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom left, var(--tw-color-secondary), var(--tw-color-tertiary))",
      },
      colors: {
        primary: "#762BEB",
        secondary: "#E1D4ED",
        tertiary: "#E2E4F2",
        bgcolorblur: "#DAD8EF",
        textp: "#65636B",
        textheader: "#0B0A2F",
      },
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};


