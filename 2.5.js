const readlinesync = require("readline-sync");

let i = new Number(readlinesync.question('What is your favorite number? : '));

do{
    i = new Number(readlinesync.question('Are you sure ? confirm your number : '));
}
while (i != 42) ;
