/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightest-blue': '#F7FBFC', // New: Very light, almost white-blue
        'light-blue-bg': '#D6E6F2', // New: Slightly darker background blue
        'medium-blue-accent': '#B9D7EA', // New: Accent color, for important sections
        'dark-blue': '#769FCD', // New: Primary accent/button color, darker blue
      },
    },
  },
  plugins: [],
}

