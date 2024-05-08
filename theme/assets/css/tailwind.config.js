const themeDir = __dirname + '/../../';

module.exports = {
  content: [
    './layouts/**/*.{html,js,md}',
    './static/**/*.{html,js,php}',
    themeDir + 'layouts/**/*.{html,js,md}',
  ],
  theme: {
    extend: {
      
    }
  },
  variants: {

  },
  plugins: []
}
