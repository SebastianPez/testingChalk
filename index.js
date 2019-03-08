var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message2 = chalk.blue.bgYellow.bold('Hello world!');
console.log(message2);
