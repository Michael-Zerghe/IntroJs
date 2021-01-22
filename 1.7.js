const readlineSync = require("readline-sync");
let shoesize = readlineSync.question("What's your shoesize ? ");

let birthyear = readlineSync.question("what's your birthyear ? ");

console.log((shoesize * 2 + 5) * 50 - birthyear + 1776);