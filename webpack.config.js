const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    todo: './src/js/todo.js',
  },
  output: {
    filename: './js/todo.js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    hot: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: './style/todo.css',
    }),
  ],
};
