var arr = [1, 2, 3, 4, 5];
console.log(...arr);// normal rest parameter
var [a, b] = arr;
console.log(a, b);//output: 1, 2
var [ , , , , c] = arr;
console.log(c); //output: 5
var [, , ...newArr] = arr;//extracting an array without the first two elements
console.log(newArr);
