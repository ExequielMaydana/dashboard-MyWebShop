/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Puntos de interrupcion default.
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1440px",

      screens: {
        // Puntos de interrupcion especiales.
        s: "350px",
        sm: "480px",
        smm: "640px",
        md: "768px",
        lg: "976px",
        xl: "1024px",
        xlmy: "1280px",
        xxl: "1440px",
      },
    },
    colors: {
      white: "#f9fafb",
      black: "#09090b",
      aliceBlue: "#eef2ff",
      gray: "#404040",
      darkSlateGray: "#27272a",
      dimGray: "#52525b",
      slateGray: "#D3D3D3",
      darkGray: "#9ca3af",
      royalBlue: "#4338ca",
      midNightBlue: "#111827",
      whiteSmoke: "#f3f4f6",
      mediumPurple: "#a78bfa",
      error: "#b00020",
      blackMy: "#17181C",
      tras: "transparent",
      indigoEight: "#4338ca",
      indigoSeven: "#4338ca",

      // nuevos colores login
      slateBlue: "#4D47C3",
      lightSlateBlue: "#A7A3FF",
      aliceBlueTwo: "#F0EFFF",
      darkGrayTwo: "#B0B0B0",
    },
    backgroundColor: {
      bgOpacity: "rgba(0, 0, 0, 0.5)",

      white: "#f9fafb",
      black: "#09090b",
      aliceBlue: "#eef2ff",
      gray: "#404040",
      darkSlateGray: "#27272a",
      dimGray: "#52525b",
      slateGray: "#D3D3D3",
      darkGray: "#9ca3af",
      royalBlue: "#4338ca",
      midNightBlue: "#111827",
      whiteSmoke: "#f3f4f6",
      mediumPurple: "#a78bfa",
      error: "#b00020",
      blackMy: "#17181C",
      tras: "transparent",
      indigoEight: "#4338ca",
      indigoSeven: "#4338ca",

      // nuevos colores login
      slateBlue: "#4D47C3",
      lightSlateBlue: "#A7A3FF",
      aliceBlueTwo: "#F0EFFF",
      darkGrayTwo: "#B0B0B0",
    },
    fontSize: {
      //medidas xs, sm, lg, xl, xl, 2xl, 3xl...
      xxs: "0.60rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1xl": "1.3rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    // boxShadow: {
    //   lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    //   custom: "0px 4px 61px 0px rgba(77, 71, 195, 0.40)",
    // },
    transitionProperty: {
      scaleTr: "transform",
    },
    scale: {
      103: "1.03",
    },
  },
  plugins: [],
};
