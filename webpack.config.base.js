const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: 'production',    // set bundle mode to development or production
  entry: './src/index.js',    // entry point, the value is a relative path
  output: {
    path: path.join(__dirname, 'dist'),    // path need an absolute path, __dirname value is our root directory
    filename: 'app.bundle.js' // naming output javascript bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // anything that end with .js
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/, // anything that end with .css
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HTMLWebpackPlugin({
    template: './src/index.html'
  })]
}