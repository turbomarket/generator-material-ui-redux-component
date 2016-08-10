const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./app.jsx'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        DEV_TOOLS: JSON.stringify('true'),
      },
    }),
  ],
}
