const readlinesync = require("readline-sync");

let n = "";
let newPiz = "";
let pizza = [];
let delPiz = 0;
let z = "";

function menu(){
console.log("Hello! Welcome to the pizza Flavors Manager.");
console.log("");
console.log("Please choose your actions : ");
console.log("");
console.log("1 - List all the pizza flavors");
console.log("2 - Add a new pizza flavor");
console.log("3 - Remove a pizza flavor");
console.log("4 - Exit this program");

n = readlinesync.question("Enter your action's number : ");
}

menu();

while(n !="4"){
switch(n){
    case "1" : console.log(pizza);
               z = readlinesync.question('Press ENTER to go back to the menu : ');
               menu();
    break;
    case "2" : while(newPiz != "STOP"){
               newPiz = readlinesync.question("Enter a new flavor to add to the list : ");
               pizza.push(newPiz);
            }
            NewPiz = "";
            menu();
    break;
    case "3" : delPiz = new Number(readlinesync.question("Enter the number of the pizza you want to delete : "));
               pizza.pop(delPiz-1);
               menu();
    break;
}
}

console.log("Thanks for using the Pizza Flavor Manager.");



