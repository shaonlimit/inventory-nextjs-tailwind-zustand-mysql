module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // different screen sizes
    // access by using max-w-screen-sm max-w-screen-xl etc or lg:w-20
    screens: {
      xs: '16em', //16em kore plus kore
      sm: '32em', //
      md: '48em', //
      lg: '64em', //
      xl: '80em', //
      '2xl': '96em', //
      '3xl': '112em',
      '4xl': '128em', // enough
      '5xl': '144em', // web-large
      '6xl': '160em', //mac pro 13 retina
      '7xl': '176em', // mac pro 15 retina
    },
    fontFamily: {
      nunito: "'Nunito', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      colors: {
        primary: {
          100: '#21263C',
          200: '#181C2E',
          300: '#C0C5C1',
          400: '#7D8491',
          500: '#443850',
        },
      },
    },
  },
  plugins: [],
};
