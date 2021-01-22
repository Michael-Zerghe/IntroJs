const readlinesync = require("readline-sync");

function CalcSurface(lenght,width,){
    lenght = new Number(readlinesync.question('Enter the lenght : '));
    width = new Number(readlinesync.question('Enter the width : '));
    let result = lenght * width;
    console.log(result);
}

CalcSurface();

