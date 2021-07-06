function nextInLine(arr, item) {
arr.push(item);
return arr.shift(); 
}
var testArr = [1,2,3,4,5];
//printing the original array:
console.log("original testArr=" + testArr);
//calling the function nextInLine:
var result = nextInLine (testArr, 6);
//printing the results now:
console.log("modified testArr=" + testArr);
console.log("Return value=" + result);