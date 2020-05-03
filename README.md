# FMS Login Module

This is the login module of flight mamagement system

## Dependency used
1. npm install --save bootstrap
2. npm install --save jquery

##Steps to use bootstrap
1. Install dependency mentioned above
2. Open the angular.json file of your project and include
3.  Add to 
	"styles": [
		"./node_modules/bootstrap/dist/css/bootstrap.css",
        "src/styles.css"              
    ],
    "scripts": [
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ] 
4. Restart app

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
