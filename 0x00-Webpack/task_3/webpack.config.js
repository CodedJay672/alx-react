//webpack config file
//import plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
    header: {
      import: './modules/header/header.css',
      dependOn: 'shared',
    },
    body: {
      import: ['./modules/body/body.css', 'lodash'],
      dependOn: 'shared',
    },
    footer: {
      import: './modules/footer/footer.css',
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    runtimeChunk: 'multiple',
  },
  devServer: {
    port: 8564,
    open: true,
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
  plugins: [
    new HtmlWebpackPlugin({ title: 'Webpack title' }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
};