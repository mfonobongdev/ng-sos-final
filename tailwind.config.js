module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './page-components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        dullOrange: '#FDF0E5',
        deepBlue: '#070EC4',
        lightBlue: '#EDFBFF',
        sosRed: '#DA2327',
        heroMain: '#F9FDFA'
      },
      textColor: {
        primary: '#132339',
        secondary: '#5B6169'
      }
    }
  },
  plugins: []
}
