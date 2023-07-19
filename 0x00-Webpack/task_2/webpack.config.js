//webpack config file

//import path
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|ico|jpeg|jpg)$/i,
        use: [
          'file-Loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              //disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quantity: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              //enable WEBP
              webp: {
                quantity: 75,
              },
            },
          },
        ],
      },
    ],
  },
};