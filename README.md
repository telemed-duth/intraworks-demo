# Intraworks demo

## Getting Started

### Prerequisites (run commands)

- Update and install sqlite3 and build libs
 
		sudo apt-get update && sudo apt-get install build-essential sqlite3
	
- Update NPM and install deps
	
		npm install -g npm gulp gulp-cli webpack

- Make sure you have python 2.7 installed with `python --version` and then set npm to use this

		npm install -g node-gyp npm config set python $(which python)

### Developing

1. Run `npm install` to install server dependencies (at initial setup and when you need to update deps).

2. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## Docs

This project is based on [Angular Full-Stack Generator](http://angular-fullstack.github.io/generator-angular-fullstack/Getting_Started/Prerequisites.html).

Although it doesnt follow the mongodb-mongoose-nosql patterns.

The database model is based on SQL (sqlite3) using the [SequelizeJS](http://docs.sequelizejs.com/en/v3/) adapter
