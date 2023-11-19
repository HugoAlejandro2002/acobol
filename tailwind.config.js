/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009999',
        secondary: '#ffed4a',
        accent: '#ff3855',
      },
    },
  },
  plugins: [],
}
