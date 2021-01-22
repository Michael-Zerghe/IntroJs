const readlineSync = require("readline-sync");

let a = Math.floor (new Number(readlineSync.question("What's your first number ? ")));

let b = Math.floor (new Number(readlineSync.question("What's the number by wich you want to divide your first number ? ")));

console.log(Math.floor(a/b));
console.log("the rest of your division is " + (a%b));