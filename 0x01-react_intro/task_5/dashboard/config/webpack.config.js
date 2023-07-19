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
        test : /\\.(gif|png|jpe?g|svg)$/i ,
        use : [ 
          'file-loader' , {
          loader : 'image-webpack-loader' ,
          options : {
            bypassOnDebug : true ,
            disable : true ,
          } ,
        },],
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
  },
}