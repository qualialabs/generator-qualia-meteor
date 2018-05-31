const Generator = require('yeoman-generator');
const path = require('path');
const _ = require('underscore');

module.exports = class extends Generator {

  prompting() {
    this.context = {};
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Full package name (e.g. qualia:lasr)',
        validate: input => _.every(input.trim().split(':')),
      },
      {
        type: 'input',
        name: 'summary',
        message: 'Brief summary',
        validate: input => !!input.length,
      },
    ]).then(answers => {
      this.context.packageName = answers.name;
      this.context.packageSummary = answers.summary;
    });
  }

  writing() {
    const templates = [
      'package.js',
      'README.md',
      'client/main.js',
      'server/main.js',
    ];

    templates.forEach(inPath => {
      this.fs.copyTpl(
        this.templatePath(inPath),
        this.destinationPath(inPath),
        this.context
      );
    });
  }
};
