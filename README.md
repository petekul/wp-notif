# Dashboard UI Kit - <a href="https://github.devops.worldpay.local/pages/UI/wp-dashboard-ui-kit/">Preview</a>

![alt text](./preview.png "Worldpay UI Kit")

Fully Responsive UI kit with corporate style guide built with Bootstrap 4, Angular 5 and Webpack 3. The kit is dedicated for dashboards and contains elements related to displaying / filtering / navigating / managing data sets, visualizing interactive charts and handling complex forms.

## Technologies

- [Angular 5](https://angular.io) 
- [Angular CLI](https://cli.angular.io/) 
- [TypeScript](http://www.typescriptlang.org/)
- [Bootstrap 4](http://getbootstrap.com/) 
- [Webpack 3](http://webpack.github.io/)
- [ES6 / ES7](http://es6-features.org/)
- [NPM Scripts](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)
- [SASS](http://sass-lang.com/) 
- [Ahead of Time Compile](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) 
- [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
- [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)
- [Karma](https://karma-runner.github.io/)
- [Protractor](https://angular.github.io/protractor/)
- [Jasmine](https://github.com/jasmine/jasmine)
- [Istanbul](https://github.com/gotwarlost/istanbul)
- [@types](https://www.npmjs.com/~types)
- [TsLint](http://palantir.github.io/tslint/)
- [Codelyzer](https://github.com/mgechev/codelyzer)
- [Docker](https://www.docker.com/what-docker)

## Quick start

    # WINDOWS only. In terminal as administrator
    npm install -g node-pre-gyp

    # install Angular CLI (optional)
    npm install -g @angular/cli

    # install global dependencies
    npm install webpack-dev-server rimraf webpack -g

    # install the repo with npm
    npm install

    # start the server
    npm start

    # use Hot Module Replacement
    npm run server:dev:hmr

    # build prod code
    npm run build:prod

## Angular CLI + Advanced Setup
Angular CLI can be used for testing, linting and as a generator, but there is currently more powerfull custom config for buidling and serving the application.

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g c my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g d my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g p my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g s my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g c my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g g my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g i my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g e my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g m my-module`

## License
 [MIT](/LICENSE)
