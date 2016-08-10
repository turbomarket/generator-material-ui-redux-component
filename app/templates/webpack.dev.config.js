const webpack = require('webpack')
const commonConfig = require('./webpack.config')

module.exports = Object.assign({}, commonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        DEV_TOOLS: JSON.stringify('true'),
      },
    }),
  ],
})
