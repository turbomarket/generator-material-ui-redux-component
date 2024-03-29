const generators = require('yeoman-generator')
const path = require('path')
const dive = require('dive')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')

module.exports = generators.Base.extend({
  prompting() {
    return this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Material UI Component Name (ej: TimePicker)',
        store   : true,
      },
      {
        type    : 'input',
        name    : 'use',
        message : 'What will this component be used for? (ej: to provide an field that ...)',
        store   : true,
      },
      {
        type    : 'input',
        name    : 'version',
        message : 'Version',
        default : '0.1.0',
        store   : true,
      },
      {
        type    : 'input',
        name    : 'author',
        message : 'Author',
        store   : true,
      },
      {
        type    : 'input',
        name    : 'license',
        message : 'License',
        default : 'ISC',
        store   : true,
      },
    ]).then(function (answers) {
      this.name = upperFirst(answers.name)
      this.use = answers.use
      this.version = answers.version
      this.author = answers.author
      this.license = answers.license

      // derived values
      this.nameupper = answers.name.toUpperCase()
      this.namelower = answers.name.toLowerCase()
      this.namecamel = camelCase(answers.name)

    }.bind(this))
  },

  writing() {
    const templatePath = this.templatePath()
    const destinationRoot = this.destinationRoot()
    dive(templatePath, { all: true }, function (err, file, stat) {
      if (err) throw err
      this.fs.copyTpl(file, path.join(destinationRoot,
        path.relative(templatePath, file).replace('Component', this.name)
        .replace('stories.js', `${this.namecamel}.js`)),
        {
          name: this.name,
          nameupper: this.nameupper,
          namelower: this.namelower,
          namecamel: this.namecamel,
          version: this.version,
          use: this.use,
          author: this.author,
          license: this.license,
        }
      )
    }.bind(this))
  },

  installing() {
    this.installDependencies()
  }
})
