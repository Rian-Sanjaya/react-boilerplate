const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',  // set bundle mode to development (not minified version)
  devServer: {
    port: 9000,  // setting the port to used
  },
  devtool: 'source-map' // for better debugging in browser developer tool
})