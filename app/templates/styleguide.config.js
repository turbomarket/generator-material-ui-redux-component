const path = require('path')
const webpackAppConfig = require('./webpack.config.js')
const find = require('lodash/find')
module.exports = {
  title: '<%= name %>',
  components: './components/<%= name %>*.jsx',
  updateWebpackConfig: (webpackConfig) => {
    // buscamos el loader "babel" del webpack config de la aplicación
    const webpackAppBabelLoader = find(webpackAppConfig.module.loaders,
      loader => ((loader.loaders instanceof Array) ? loader.loaders.indexOf('babel') >= 0 :
      loader.loaders === 'babel'))

    // usamos el mismo loader de babel empleado
    webpackConfig.module.loaders.push(webpackAppBabelLoader)

    // wraps with MuiThemeProvider
    // eslint-disable-next-line no-param-reassign
    webpackConfig.resolve.alias['rsg-components/Wrapper'] =
      path.join(__dirname, 'docs/lib/styleguide/Wrapper.js')

    return webpackConfig
  },
  // en caso de estar ejecutándose en heroku, cambiamos el host
  serverHost: process.env.PORT ? '0.0.0.0' : 'localhost',
  // en caso de estar ejecutándose en heroku, usamos el port provisto por heroku
  serverPort: process.env.PORT || 3000,
}
