'use strict';
const Generator = require('yeoman-generator');
const commandExists = require('command-exists').sync;
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts){
    super(args, opts);
  }

  initializing() {

  }

  prompting() {
    // Have Yeoman greet the user.
    // this.log(
    //   yosay(`Welcome to ${chalk.red('generator-create-express-react-app')} generator!`)
    // );

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

    this.prompt(prompts).then(props => {
      let {app_name,database,create_app,app_description} = props

      this.on('end',()=>{
        console.log('prompt end');
      })

      done();
      //this.props = props;
    });
  }

  writing() {

   // console.log('writing',this.props)
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );

    this._writingGit()

  }

  _writingGit(){
    this.fs.copy(
      this.templatePath('gitignore'),
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

  end(){
    const message = `Created new app`;
    this.log(message);
  }
};
