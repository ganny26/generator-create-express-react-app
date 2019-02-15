

[![NPM](https://nodei.co/npm/generator-create-express-react-app.png)](https://nodei.co/npm/generator-create-express-react-app/)

## Motivation

To create a simple react express webapp application powered by Webpack 4

## Installation


```bash
npm install -g yo
npm install -g generator-create-express-react-app
```

Then generate your new project:

```bash
yo create-express-react-app
```

## How to run app

```bash

cd <your app name>
yarn dev

```


### Directory layout

    .
    ├── build
    ├── build-dev
    ├── config
    ├── src
    │   ├── client
    │   ├── server
    │        ├── bin
    │        ├── controller
    ├── .babelrc
    ├── .prettierrc
    └── Dockerfile


## Completed

- [x] database & orm
- [x] package, build and hot-reload
- [x] sass, material-ui
- [x] environment support for config variable store
- [x] dockerfile & docker-compose
- [x] testing automation
- [x] publish to yeoman

## Things to do

- [ ] log message after app created
- [ ] static asset pipeline
- [ ] health check api and webpage
- [ ] debugging and benchmarking tools
- [ ] authentication and authorisation using JWT
- [ ] caching and background job
- [ ] write a blog about this


## License

MIT © [Selvaganesh](https://ganny26.github.io/)
