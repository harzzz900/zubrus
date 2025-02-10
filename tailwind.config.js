/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bluelight: '#F0F1FF',
        lightgray: '#797F88',
        mediumgray: '#9DA3AB',
        darkblue: '#1E4AD9'

      },
      boxShadow: {
        'custom': '0px -1px 1.5px 0px rgba(0, 0, 0, 0.03)',
        'inner-top-strong': 'inset 0 25px 10px 0 rgba(0, 0, 0, 0.04)',
      },
      screens: {
        xxl: { max: '1500px' },
        xl: { max: '1300px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
        xs: { max: '500px' },
        xxs: { max: '400px' },
        xxxs: { max: '376px' },
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
}

