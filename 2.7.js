const readlinesync = require("readline-sync");

let n = new Number(readlinesync.question('Please enter a number between 1 and 5 : '));
let total = 0;
let i= 1;
let Numb = 0;

console.log("You have entered " + n + ". You will now enter " + n +" numbers and the program will display the total.")
console.log("")


while(i<=n) {
    Numb = new Number(readlinesync.question('Please enter a number : '));
    total = total + Numb;
    i +=1;

}

console.log("The total of your " + n + " numbers is : " + total);

