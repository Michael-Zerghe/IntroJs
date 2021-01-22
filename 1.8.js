const readlineSync = require("readline-sync");
let shoessize = readlineSync.question("What's your shoesize ? ");

let birthyear = readlineSync.question("what's your birthyear ? ");

let city = readlineSync.question("Where do you live ? ")

let favouritecolor = readlineSync.question("What's your favourite color ? ")

let girlfriend = readlineSync.question("What's the name of your love ? ")

console.log("You're born in " + birthyear + ", your shoesize is " + shoessize + " and your live in " + city + " and your favourite color is " + favouritecolor + " and your girlfriend is " + girlfriend + " !!");