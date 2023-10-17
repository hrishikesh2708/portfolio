/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("./src/plugins/myCustomUtilities")],
  theme: {
    colors: {
      blue: {
        100: "#E1EFFE",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      shade: {
        1: "#FFFFFF",
        2: "#B3B3B3",
        3: "#3B3B3B",
        4: "#121212",
        5: "#0A0A0A",
      },
      accent: {
        1: "#9B5CFF",
        2: "#FFE074",
        3: "#5EE2FF",
      },
      gradient01: "#5EE2FF",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      customUtilities: {
        "right-border-radius":
          "right: 50%; border: 2px solid #FFC100; border-radius: 1%;",
      },
      backgroundImage: {
        usc: "url('./assets/usc.webp')",
        srm: "url('./assets/srm.jpeg')",
      },
    },
  },
};
