module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    letterSpacing: {
      'x-sm': '0.08em',
      'x-normal': '0em',
      'x-med': '0.15em',
      'x-wide': '0.175em',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        peachOrange: '#FFC593',
        turkishRose: '#BC7198',
        dodgerBlue: '#5A77FF',
        pureBlack: '#000000',
        lightGrey: '#F5F5F5',
        medGrey: '#DFDFDF',
        pureWhite: '#FFFFFF',
      },
      margin: {
        'x-l': '50%',
      },
      backgroundImage:{
        'modal-bg': "url('./assets/box-wrap-modal.jpg')"
      }
    },
  },
  plugins: [],
};
