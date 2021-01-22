const readlinesync = require("readline-sync");

let n = 0;
let i = 2;
answer = 0;
let div = [];

console.log("This program will give you every divider of the positive integer number you enter except 1 and itself.");
console.log("A positive integer number is a number above 0 without decimals.");
n = new Number(readlinesync.question('Enter a positive integer number : '));

while(i != n){

    if(n%i === 0){
        div.push(i);
    }
    i +=1;
}

console.log("All the dividers of " + n + " are : " + div);