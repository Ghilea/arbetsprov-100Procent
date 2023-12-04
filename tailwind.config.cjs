import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config}*/
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "cover-image": `linear-gradient(to bottom, rgba(28,48,66, 0.5), rgba(28, 48, 66, 1)), url('/src/assets/images/bg.jpg');`,
      },
    },
  },
  plugins: [],
});
