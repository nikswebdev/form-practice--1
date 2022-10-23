/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      darkBlue: '#293241',
      pink: '#FF5E5B',
      lightBlue: '#1D84B5',
      green: '#00BD9D',
      white: '#FFFBFA',
    },
    fontFamily: {
      roboto: ['Roboto'],
    },
    extend: {},
  },
  plugins: [],
};
