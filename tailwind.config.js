/** @type {import('tailwindcss').Config} */

const sizes = {
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  10: "10px",
  12: "12px",
  14: "14px",
  16: "16px",
  20: "20px",
  52: "52px",
  500: "500px",
};

const colors = {
  white: "#FFFFFF",
  blue: "#0096FF",
  gray: "#C5C5C5",
  lightGray: "#F0F0F0",
  darkGray: "#696969",
};

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
      spacing: sizes,
      fontSize: {
        16: ["16px"],
        22: ["22px"],
        32: ["32px"],
      },
      minWidth: sizes,
      minHeight: sizes,
      maxHeight: sizes,
      gap: sizes,
    },
  },
  plugins: [],
};
