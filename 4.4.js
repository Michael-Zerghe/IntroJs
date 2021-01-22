const readlineSync = require("readline-sync");

function rand10(){

    return Math.floor(Math.random() * 10);
}
n = new Number(readlineSync.question("enter a number between 1 and 10! "));

function multiRand(){
    let i = 0;

    let arr = [];

    while(i<n){
        arr.push(rand10());
        i += 1;
    }
    return arr;
}

let a = multiRand();

function min(){
    console.log(a);
    return Math.min(...a);
}

function max(){
    console.log(a);
    return Math.max(...a);
}

let aver = 0;
let i2 = 0;
let total = 0;


function average(){
    console.log(a);
    while(i2<a.length){
        total = total + a[i2];
        i2 += 1;
    }
    aver = total/a.length;
    return aver;
}

console.log(min());
console.log(max());
console.log(average());