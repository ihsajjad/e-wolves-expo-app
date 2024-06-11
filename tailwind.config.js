/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C57EC",
        },
        secondary: {
          DEFAULT: "#F0EEFD",
        },
        "title-color": {
          DEFAULT: "#0B002C",
        },
        description: {
          DEFAULT: "#919191",
        },
      },
    },
  },
  plugins: [],
};
