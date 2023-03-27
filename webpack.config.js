const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // ...
  entry: './src/js/main.js',
  plugins: [
    new BundleAnalyzerPlugin({
        analyzerMode: "static"
    })
  ]
}
