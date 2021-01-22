const readlineSync = require("readline-sync");

let firstname = readlineSync.question("What's your name ? ")

console.log("Hello " + firstname +"!")