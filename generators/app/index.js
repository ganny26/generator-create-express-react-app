'use strict';
const Generator = require('yeoman-generator');
const commandExists = require('command-exists').sync;
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const makeDir = require('make-dir');



module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {

  }

  prompting() {
    const done = this.async();

    const prompts = [
      {
        type: 'input',
        name: 'app_name',
        message: 'What is your app name?',
        default: 'express-react-demo'
      },
      {
        type: 'input',
        name: 'app_description',
        message: 'Description of your app',
        default: 'Boilerplate for express create react app'
      },
      {
        type: 'list',
        name: 'database',
        message: 'Which database you like to use',
        default: 'SQL',
        choices: ['SQL', 'MongoDB']
      },
      {
        type: 'confirm',
        name: 'create_app',
        message: 'Do you want to create app?',
        default: true
      }

    ];

    this.prompt(prompts).then(answers => {

      this.props = {
        app_name: answers.app_name,
        app_description: answers.app_description,
        database: answers.database
      };

      done();
      //this.props = props;
    });
  }

  configuring() {
    if (path.basename(this.destinationRoot()) !== this.props.app_name) {
      return makeDir(this.props.app_name).then(path => {
        this.destinationRoot(path);
        this.log(`\nGenerating a new project in ${chalk.green(path)}\n`);
      });
    }
  }



  writing() {
    this.fs.copyTpl(
      this.templatePath('config'),
      this.destinationPath('config'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('.prettierrc'),
      this.destinationPath('.prettierrc'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('build-dev'),
      this.destinationPath('build-dev'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.app_name,
        description: this.props.app_description
      },
      this.props
    );


    // this.copy('src','src')
    // this.copy('config','config')



    // this.fs.copyTpl(
    //   this.templatePath('index.html'),
    //   this.destinationPath('index.html'),
    //   this.props
    // );


    // if (this.props.database === 'SQL') {
    //   this.fs.copyTpl(
    //     this.templatePath('_sql-package.json'),
    //     this.destinationPath('package.json'), {
    //       name: this.props.app_name,
    //       description: this.props.app_description
    //     },
    //     this.props
    //   );
    // } else {
    //   this.fs.copyTpl(
    //     this.templatePath('_mongo-package.json'),
    //     this.destinationPath('package.json'), {
    //       name: this.props.app_name,
    //       description: this.props.app_description
    //     },
    //     this.props
    //   );
    // }






    this._writingGit()

  }

  _writingGit() {
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'));

    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile'));
  }


  install() {
    const hasYarn = commandExists('yarn');
    const hasBower = commandExists('bower');
    this.installDependencies({
      npm: !hasYarn,
      yarn: hasYarn,
      bower: hasBower

    });

  }

  end() {
    this.spawnCommandSync('git', ['init', '--quiet']);
    const message = `Created new app`;
    this.log(message);
  }
};
