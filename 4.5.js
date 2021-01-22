const readlineSync = require("readline-sync");

let x1 = new Number(readlineSync.question("Enter x1 axis : "));
let y1 = new Number(readlineSync.question("Enter y1 axis : "));
let x2 = new Number(readlineSync.question("Enter x2 axis : "));
let y2 = new Number(readlineSync.question("Enter y2 axis : "));
let A = [x1,y1];
let B = [x2,y2];
let dist = 0;

function calcDistance(){
    dist = Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2)));
    return dist.toFixed(2);
}
console.log(calcDistance());