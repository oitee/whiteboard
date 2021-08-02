//Remove Duplicates from Sorted Array
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
  let previousIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (i != 1) {
      previousIndex = i - 1;
    }
    if (nums[i] == nums[previousIndex]) {
      nums.splice(previousIndex, 1);
      i = i - 1;
    }
  }
  return nums.length;
};
let arr1 = [1, 1, 1, 1, 2, 3];
console.log("my arr1 =" + arr1);
console.log("return value of nums " + removeDuplicates(arr1));
console.log(arr1); //[1,2,3]

let arr2 = [0, 1, 1, 1, 2, 3];
console.log("my arr2 =" + arr2);
console.log("return value of nums " + removeDuplicates(arr2));
console.log(arr2); //[0,1,2,3]

let arr3 = [0, 1, 2, 3, 3];
console.log("my arr1 =" + arr3);
console.log("return value of nums " + removeDuplicates(arr3));
console.log(arr3); //[0,1,2,3]
