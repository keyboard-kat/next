/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,ts,jsx,tsx}", "./components/**/*.{html,js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#c026d3",
          secondary: "#9333ea",
          accent: "#d8b4fe",
          neutral: "#ddd6fe",
          "base-100": "#edefff",
          info: "#2563eb",
          success: "#059669",
          warning: "#fdba74",
          error: "#ef4444",
        },
      },
    ],
  },
};
