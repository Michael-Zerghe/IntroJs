const readlinesync = require("readline-sync");

console.log("Please enter a number between 1 and 7, and the program will give the day of the week that correspond.");
console.log("For example : 1 is for Monday, 2 for Tuesday,...");

let number = readlinesync.question('Please enter a number between 1 and 7 : ');

switch(number) {
case '1' : console.log("Monday");
        break;
case '2' : console.log("Tuesday");
        break;
case '3' : console.log("Wednesday");
        break;
case '4' : console.log("Thursday");
        break;
case '5' : console.log("Friday");
        break;
case '6' : console.log("Saturday");
        break;
case '7' : console.log("Sunday");
        break;

default : console.log("There is only seven days in week, try again with a smaller number");
}

