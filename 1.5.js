const readlineSync = require("readline-sync");

let first = Math.floor(readlineSync.question("What's your first number ? He needs to have a decimal. "));

let second = readlineSync.question("What's your second number ? ");

console.log(first * second);