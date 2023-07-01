/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sanz: [
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      screens: {
        xs: "380px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "savage-sig": "cubic-bezier(.2,1,.2,1)",
        "savage-sig-2": "cubic-bezier(.2,.8,.2,1)",
        "mb-phi": "cubic-bezier(.0426,.6146,.5158,1.0298)",
      },
      colors: {
        mossy_glen: {
          10: "#f7fff8",
          50: "#d4ffdc",
          100: "#a1feb7",
          200: "#87e09d",
          300: "#6ec384",
          400: "#55a76b",
          500: "#3a8b52",
          600: "#1e723b",
          700: "#005827",
          800: "#003d19",
          900: "#00240b",
          950: "#001307",
        },
        sunlit_meadow: {
          10: "#fff9f3",
          50: "#ffe1bf",
          100: "#ffc58c",
          200: "#ffaa59",
          300: "#ff8f26",
          400: "#e67c0e",
          500: "#bf640a",
          600: "#994b06",
          700: "#733204",
          800: "#4c1900",
          900: "#260c00",
          950: "#0f0600",
        },
        misty_mountains: {
          10: "#f4f8ff",
          50: "#c1d8ff",
          100: "#8ebaff",
          200: "#5b9eff",
          300: "#287eff",
          400: "#0d62e6",
          500: "#0a4abf",
          600: "#073394",
          700: "#041d6e",
          800: "#021647",
          900: "#000c21",
          950: "#00060d",
        },
        mossy_glen_accent: {
          100: "#9effb6",
          200: "#54eb87",
          300: "#35cd6e",
          400: "#00b056",
          500: "#009045",
          600: "#007436",
        },
      },

      animation: {
        tilt: "tilt 10s infinite ease-in-out",
        slight_tilt: "slight_tilt 10s infinite ease-in-out",
        roundhouse: "roundhouse 1s infinite cubic-bezier(.5,.4,.5,.6)",
        roundhouse_slow: "roundhouse 3s infinite cubic-bezier(.5,.4,.5,.6)",
        roundhouse_chill:
          "roundhouse_chill 23s infinite cubic-bezier(.5,.4,.5,.6)",
        rotato: "rotato 1s linear",
        blob_1: "blob 7s infinite cubic-bezier(.5,.4,.5,.6)",
        blob_2: "blob 11s infinite cubic-bezier(.5,.4,.5,.6)",
        blob_3: "blob 13s infinite cubic-bezier(.5,.4,.5,.6)",
        blob_rotate_1: "blob_rotate 7s infinite cubic-bezier(.5,.4,.5,.6)",
        blob_rotate_2: "blob_rotate 11s infinite cubic-bezier(.5,.4,.5,.6)",
        blob_rotate_3: "blob_rotate 13s infinite cubic-bezier(.5,.4,.5,.6)",
        fadein: "fadein 6s ease-in-out",
        pulsor: "pulsor 1000ms both cubic-bezier(.5,0,.5,1)",
        pulsor_backdrop: "pulsor_backdrop 1000ms both cubic-bezier(.5,0,.5,1)",
        pulsor_backdrop_accelerate:
          "pulsor_backdrop 500ms both 2 cubic-bezier(.5,0,.5,1)",
      },

      keyframes: {
        pulsor_backdrop: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        pulsor: {
          "0%, 100%": { scale: "1" },
          "50%": { scale: "1.2" },
        },
        blob_rotate: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "1000%": { transform: "rotate(360deg)" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "80%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blob: {
          "0%": { scale: "1", translate: "-0% -5%" },
          "25%": { scale: "1.05" },
          "33.333%": {
            translate: "-3% 1%",
          },
          "50%": { scale: "1" },
          "66.667%": {
            translate: "3% 1%",
          },
          "75%": { scale: "0.95" },
          "100%": {
            scale: "1",
            translate: "-0% -5%",
          },
        },
        rotato: {
          "0%%,": {
            transform: "rotate(0deg)",
            translate: "-50% 0%",
          },
          "50%": {
            transform: "rotate(45deg)",
            translate: "-50% -20.711%",
          },
          "100%": {
            transform: "rotate(90deg)",
            translate: "-50% 0%",
          },
        },
        rotato_reverse: {
          "0%%,": {
            transform: "rotate(0deg)",
            translate: "-50% 0%",
          },
          "50%": {
            transform: "rotate(-45deg)",
            translate: "-50% -20.711%",
          },
          "100%": {
            transform: "rotate(-90deg)",
            translate: "-50% 0%",
          },
        },
        tilt: {
          "0%, 50%, 100%,": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
        slight_tilt: {
          "0%, 50%, 100%,": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.3deg)",
          },
          "75%": {
            transform: "rotate(-0.3deg)",
          },
        },
        roundhouse: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "75%": {
            transform: "rotate(270deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        roundhouse_chill: {
          "0%": {
            transform: "rotate(0deg)",
            translate: "-50% -50%",
            scale: "1",
          },
          "25%": {
            transform: "rotate(-90deg)",
            scale: "0.95",
          },
          "33.333%": {},
          "50%": {
            transform: "rotate(-180deg)",
            scale: "1",
          },
          "66.667%": {},
          "75%": {
            transform: "rotate(-270deg)",
            scale: "1.05",
          },
          "100%": {
            transform: "rotate(-360deg)",
            translate: "-50% -50%",
            scale: "1",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
