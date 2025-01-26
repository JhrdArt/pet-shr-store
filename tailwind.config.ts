import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      screens:{
        xs: "440px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }
    },
    animation: {
      'slide-in': 'slide-in 0.3s ease-out forwards',
      'slide-out': 'slide-out 0.3s ease-in forwards',
    },
    keyframes: {
      'slide-in': {
        '100%': { transform: 'translate(-100%, -100%)', opacity: '0' },
        '0%': { transform: 'translate(0, 0)', opacity: '1' }
      },
      'slide-out': {
        '0%': { transform: 'translate(0, 0)', opacity: '1' },
        '100%': { transform: 'translate(100%, 100%)', opacity: '0' }
      }
    }
  },
  plugins: [],
} satisfies Config;
