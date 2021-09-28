const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    todo: './src/js/todo.js',
  },
  output: {
    filename: './js/todo.js',
    path: `${__dirname}/dist`,
    publicPath: '',
  },
  module: {
    rules: [{
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'todo.css',
    }),
  ],
};