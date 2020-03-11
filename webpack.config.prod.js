const merge = require('webpack-merge')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production', // set bundle mode to production (minified version)
  plugins: [
    new BundleAnalyzerPlugin({  // plugin for outputing static report analyzer
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-analyzer.html'
    })
  ],
  externals: {  // exclude from production bundle (use CDN in index.html to include react and react-dom)
    react: 'React',
    'react-dom': "ReactDOM"
  },
  optimization: {
    concatenateModules: false // Add this flag to view all modules regarding webpack-bundle-analyzer. Should be used for debugging only. Remove for actual prod build
  }
})