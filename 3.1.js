let Numb = [1,2,3,4,5];
let Numb2 = [100,101,102];
let Total = 0;
let Total2 = 0;
let i = 0;
let i2 = 0;

while(i<Numb.length){
    Total = Total + Numb[i];
    i +=1;
}

while(i2<Numb2.length){
    Total2 = Total2 + Numb2[i2];
    i2+=1;
}

console.log(Total);
console.log(Total2);