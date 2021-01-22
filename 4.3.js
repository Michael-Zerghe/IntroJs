const readlinesync = require("readline-sync");

function rand10(){
    return Math.floor(Math.random()*10);
}

function multirand(arr,n){
    n = new Number(readlinesync.question('Enter the number of random number you want to generate : '));
    let i = 0;
    arr = [];
    while(i<n){
        arr.push(rand10());
        i +=1;
    }
    return arr;

}

console.log(multirand());