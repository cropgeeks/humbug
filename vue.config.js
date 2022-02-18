// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pwa: {
    name: 'Humbug',
    themeColor: '#273c75',
    msTileColor: '#2b5797',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    start_url: '/index.html',
    workboxOptions: {
      skipWaiting: true
    }
  }
  // configureWebpack: {
  //   plugins: [
  //     new BundleAnalyzerPlugin()
  //   ]
  // }
}