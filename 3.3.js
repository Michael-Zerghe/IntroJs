let arr = [1,2,3,4,5];
let arr2 = [];
let i = 0;

while(i<arr.length){
    arr2.push(arr[i]);
    i +=1;
}

console.log(arr2);


let arr3 = arr.slice();

console.log(arr3);