module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: "assets",
}