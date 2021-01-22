const readlinesync = require("readline-sync");

let Age = new Number(readlinesync.question('Please enter your Age : '));

if (Age >= 18) {
    console.log("you are an adult.");
}
else {
    console.log("you are not an adult yet.");
}