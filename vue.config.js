module.exports = {
  publicPath: '/',
  devServer: {
    // path
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
