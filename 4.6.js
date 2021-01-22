const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Enter a number and the program will give you its factorial : '));
function factorial(n){
    if(n<0)
    return -1;
    else if (n === 0)
    return 1;
    else{
        return (n*factorial(n-1));

    }
}

console.log(factorial(n));