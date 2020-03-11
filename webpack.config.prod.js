const merge = require('webpack-merge')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production', // set bundle mode to production (minified version)
  plugins: [new BundleAnalyzerPlugin({  // plugin for outputing static report analyzer
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: 'report-analyzer.html'
  })],
  // externals: {  // exclude from production bundle (use CDN in index.html to include react and react-dom)
  //   react: 'React',
  //   'react-dom': "ReactDOM"
  // }
})