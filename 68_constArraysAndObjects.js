const myConstArray = [1, 2, 3];
myConstArray = [1, 2, 3, 4]; //Type Error, as reassignment is disallowed
myConstArray.push(4);// myConstArray is now mutated to: [ 1, 2, 3, 4 ]
const myConstObject = {
    first: "1",
    second: "2"
}
myConstObject = { //Type Error, reassignment is not allowed 
    first: "1",
    second: "2",
    third: "3"
}
myConstObject["fourth"] = 4; // myConstObject is now mutated to: { first: '1', second: '2', fourth: 4 }
console.log(myConstArray);
console.log(myConstObject);