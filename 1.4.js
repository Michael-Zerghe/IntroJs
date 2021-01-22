const readlineSync = require("readline-sync");

let firstname = readlineSync.question("What's your firstname ? ")

let name = readlineSync.question("What's your name ? ")

let city = readlineSync.question("Where do you live ? ")

console.log("Your name is " + firstname + " " + name + " and you live in " + city + ".")