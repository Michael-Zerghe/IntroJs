const readlinesync = require("readline-sync");

console.log("For this little program, you will be asked to enter three numbers.A MINIMUM, a MAXIMUM, and a CURRENT");
console.log("The program will display if your current is between the min and the max you have entered.")
let min = new Number(readlinesync.question('Please enter a MINIMUM value : '));
let max = new Number(readlinesync.question('Please enter a MAXIMUM value : '));

if (min>=max){
    console.log("Learn to read. A mimimum value can not be greater than a maximum value IDIOT.");
}

else{
    let current = new Number(readlinesync.question('Please enter a current value : '));
    if ((current>min) && (current<max)) {
        console.log(current + " is between " + min + " and " + max);
    }
    else {
        console.log(current + " is not between " + min + " and " + max);
    }
}
