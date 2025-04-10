/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        designColor: {
          DEFAULT: '#3b82f6', // default (blue-500)
          dark: '#facc15', // yellow-400
          light: '#3b82f6', // blue-500
        },
        fontColor: {
          dark: '#ffffff',
          light: '#000000',
        },
        bodyColor: {
          dark: '#212428',
          light: '#f3f4f6', // bg-gray-100
        }
      },
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor'),
      }),
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      }
    },
  },
  plugins: [],
}
