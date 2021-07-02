module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pLight: '#97BF0F',
        pDark: '#6f8d0c',
        sLight: '#6840F0',
        sDark: '#4424ac',
        tLight: '#10BBB5',
        tDark: '#0d7e7a',
      },
      fontFamily: {
        head: ['Viga'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
