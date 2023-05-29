// import path and html-webpack-plugin
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|ico|jpeg|jpg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    hot: true,
  },
}