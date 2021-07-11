const myFunc = (n = 10) => n % 10;//declaring a function with default value of its parameter set to 10
console.log(myFunc(99));
console.log(myFunc());
const myFunc2 = (n = 1, m = 10, o = 0) => Math.floor(n % m) + o;//declaring a new function with default values for each of its parameters
console.log(myFunc2(99, 10));
console.log(myFunc2(55));
console.log(myFunc2(undefined, undefined, 11));

