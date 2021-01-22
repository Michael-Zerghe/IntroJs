const readlinesync = require("readline-sync");

let n = Math.floor(Math.random()* 100 );
let Answer = 0;

console.log("This program will generate a random number between 1 and 100.");
console.log("Try and guess the random number generated to win the game.")

Answer = new Number(readlinesync.question('Guess the number : '));

while (Answer !=n){
    if (Answer < n){
        Answer = new Number(readlinesync.question('Too low, try again : '));
    }
    else if (Answer > n){
        Answer = new Number(readlinesync.question('Too higg, try again : '));
    }
}

console.log('Well guessed ! ');