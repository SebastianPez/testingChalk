var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message2 = chalk.blue.bgYellow.bold('Hello world!');
console.log(message2);

var message3 = "I'm blue!";
console.log(chalk.blue.bgGreen(message3, "With a green background"));

var warning = chalk.bgRed.white;
console.log(warning('Warning!'));