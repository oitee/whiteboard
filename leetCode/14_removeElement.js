//Remove all occurences of val (integer) in the input array of integers
//cannot create a new array; have to modify the input array
//https://leetcode.com/problems/remove-element/

var removeElement = function (nums, val) {
  let resultIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[resultIndex++] = nums[i];
    }
  }
  return resultIndex;
};
let inputArr = [1,2,3,4,5];
console.log(removeElement(inputArr, 1));
console.log(inputArr);

let inputArr2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(inputArr2, 2));
console.log(inputArr2);

