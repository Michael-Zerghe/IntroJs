let Numb = [1,2,3,4,5];
let Numb2 = [100,101,102];
let Aver = 0;
let Aver2 = 0;
let i = 0;
let i2 = 0;

while(i<Numb.length){
    Aver = Aver + Numb[i];
    i +=1;
}

while(i2<Numb2.length){
    Aver2 = Aver2 + Numb2[i2];
    i2+=1;
}

console.log(Aver/Numb.length);
console.log(Aver2/Numb2.length);