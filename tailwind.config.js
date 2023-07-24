/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        text: "#666",
        "backgorund-1": "#f5f5f5",
        whitesmoke: "#f3f9fb",
        heading: "#222",
        line: "#d9d9d9",
        border: "#ededed",
        deepskyblue: "#05abf3",
        primary: "#008ecc",
        linen: "#ffecdf",
        peachpuff: "#ffd1b0",
        lemonchiffon: "#fff3cc",
        khaki: "#f6de8d",
        darkslategray: {
          "100": "#494949",
          "200": "#313131",
        },
        black: "#000",
        forestgreen: "#249b3e",
        gray: "#212844",
      },
      fontFamily: {
        "hk-grotesk": "'HK Grotesk'",
        inherit: "inherit",
      },
      borderRadius: {
        lg: "18px",
        "43xl": "62px",
        mini: "15px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "11xl": "30px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
