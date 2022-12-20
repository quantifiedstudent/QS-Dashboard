/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'qs-blue-main': '#03a9f4',
        },
        backdropBlur: {
            xs: '1px',
        }
    },
  },
  plugins: [],
}
