var myarr = [1, 2, 3, 4];
console.log(...myarr);
//const ExtractArr = (...arr) => ...arr;// error message, as the spread operator cannot stand on its own; it works in-place only
const ExtractArray = (...arr) => [...arr]//this will work
console.log(ExtractArray(myarr));
const addZero = (...arr) => [0, ...arr];//a more effective use of the spread function
console.log(addZero([1,2,3]));
console.log(addZero(1, 2, 3, 4));