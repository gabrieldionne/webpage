module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/webpage',

    pages: {
        index: {
          // entry for the page
          entry: 'src/main.js',
          title: 'Gabriel Dionne',
        }
    }
}