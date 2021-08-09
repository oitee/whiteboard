//Given an array of integers representing a number, where each element represents one digit of that number, add one to the number
//And return the array
// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  if (digits[0] == 0) {
    return [1,...digits];
  }
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([1,2,3,9]));
console.log(plusOne([9,9,9]));
console.log(plusOne([0]));