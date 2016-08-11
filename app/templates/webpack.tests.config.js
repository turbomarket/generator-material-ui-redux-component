const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./components/app.jsx'],
    'spec/<%= name %>Tests.spec': './spec/<%= name %>Tests.spec',
    'spec/helpers/index': './spec/helpers/index',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
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
        NODE_ENV: JSON.stringify('development'),
        DEV_TOOLS: process.env.DEV_TOOLS === 'true' ?
          JSON.stringify('true') : JSON.stringify('false'),
      },
    }),
  ],
}
