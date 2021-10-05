### Module 3 Evaluation created with react starter kit

This is a funny Rick&Morty browser created by me. A caracter's file, to know more about them. You can choose a filter, by name or by specie, to search easily and fast, and an alphabetical ordered list will be shown. Also, if you want know more details, click on a caracter, and go to its 'id page', Have fun!

### Getting Started with Create React App

This project was bootstrapped with Create React App. In the project directory, you can run:

npm install

Install node-modules folder to begin with.

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.
You will also see any lint errors in the console.

### Structure

There's a simple structure to understand the parts of the construction of the web. The source file:
-Index.js: connect App with public file
-Components:
·App: is the main component in the project.
·Filters: and two children components--- FilterName-FilterSpecie.
·CaracterList: CaracterCard: to render the data of the api.
·CaracterDetail: routed with react route dom.
-Services:
·Api: make a petition to api, and choose data
·LocalStorage: save and get info to memory
-Styles: scss .
-Images.
-Tipo: where you can find the Rick and Morty typography.
