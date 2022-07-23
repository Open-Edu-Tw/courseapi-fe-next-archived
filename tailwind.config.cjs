/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./{pages,components,icons}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    borderRadius: {
      DEFAULT: "0.5rem",
    },
  },
  plugins: [],
};
