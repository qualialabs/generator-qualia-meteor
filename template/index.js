const decamelize = require('decamelize');
const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {

  prompting() {
    this.context = {};
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'New template name',
        validate: input => !!input.trim().length,
      },
    ]).then(answers => {
      this.context.templateName = answers.name;
    });
  }

  writing() {
    const paths = [
      'template.html',
      'template.js',
      'template.css',
    ];

    const baseName = decamelize(this.context.templateName, '_');

    paths.forEach(inPath => {
      const outPath = inPath.replace('template', baseName);
      this.fs.copyTpl(
        this.templatePath(inPath),
        this.destinationPath(outPath),
        this.context
      );
    });
  }
};
