<<<<<<< HEAD
# WhatsappSimulator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# Whatsapp-Simulator
This is a web application based on Angular 5 and Node.js. It reads your whatsapp backup file (in .txt format) and presents the text messages the way it would look like in your phone. Currently it works for a two people conversation.

## Screenshot
<img src="/screenshots/Screenshot_1.png" alt="Welcome screen" width="800">

## Why was the simulator created?
The .txt file provides quite a tedious and non-user friendly way to look at your favorite conversation backup. This is where the beautification of the conversation as though it were real comes into the picture and Whatsapp Simulator comes to the rescue.

## Technology stack
* Angular 5
* Node.js

## How to use/Contribute
You can contribute to this project by simply forking/pull request the repository.
* **npm install** - install dependencies
* **ng build && node server** - start the project (both frontend and backend).
* **ng serve** - to start only the angular server of the project.
After running **ng build && node server** open up your browser and shoot up https://localhost:3000.
Simply upload the chat backup created by Whatsapp ( .txt format ) and click upload button. Depending on how big the backup file is, the output will be seen in the two simulator, user 1's and user 2's screen.

## Issues
* For now it works for a two people conversation.
* The date/time format to parse the file will be made more generic. As of now it successfully parses file with date:dd/mm/yyyy and time:24 hours format
* Takes time to show the output if the chat backup is HUGE! So lazy loading is required. Again, feel free to fork/pull request.
* The media omitted part will be taken care of sooner than soon.

## Note
* I've just started with this project and clearly there's a lot of restructuring of the project that needs to be done. The coding standards and styles will be taken care of in an iterative way.
* More features to come!
>>>>>>> 1417991df4ca79b143edc71dc3e9d4b6c30d3c2c
