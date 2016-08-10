const webpackTestsConfig = require('./webpack.tests.config.js')

module.exports = function run(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.config.set('jasmine',
    {
      src: 'static/appComponent.js',
      options: {
        keepRunner: true,
        template: 'spec/Runner.tmpl',
        helpers: [
          './node_modules/babel-polyfill/dist/polyfill.js',
          'static/spec/helpers/index.js',
        ],
        specs: [
          'static/spec/TimePickerTests.spec.js',
        ],
        page: {
          viewportSize: {
            width: 1280,
            height: 1024,
          },
        },
      },
    }
  )

  grunt.loadNpmTasks('grunt-webpack')

  grunt.config.set('webpack', {
    app: webpackTestsConfig,
  })

  grunt.registerTask('test', ['webpack', 'jasmine'])
}
