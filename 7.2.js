const readlinesync = require("readline-sync");

let n = 0;
let answer = 0;
let i = 2;
let fibo = [0,1];

console.log("This program is made to give you the Fibonacci numbers.");
console.log("For example, if you enter 4, the program will give you the 4th fibonacci numbers which is  0,1,1,2,3.");

n = new Number(readlinesync.question('Please enter a number : '));
 
while(i<=n){
    answer = fibo[i-1]+fibo[i-2];
    i +=1;
    fibo.push(answer);
}

console.log(fibo);