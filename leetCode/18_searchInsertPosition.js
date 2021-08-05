//Given a sorted array and a target value, return the position of the target in the array
//If target does not feature in the array, return the index of the position where it ought to have been
//https://leetcode.com/problems/search-insert-position/

var searchInsert = function (nums, target) {
  let i = 0;
  let length = nums.length - 1;
  if (length == -1) {
    return i;
  }
  while (length - i > 1) {
    let half = Math.floor((length + i) / 2);
    if (nums[half] == target) {
      return half;
    }
    if (nums[half] < target) {
      i = half;
    } else {
      length = half;
    }
  }
  if (target <= nums[i]) {
    return i;
  }
  if (target > nums[i] && target < nums[length]) {
    return i + 1;
  }

  if (target == nums[length]) {
    return length;
  }
  if (target > nums[length]) {
    return length + 1;
  }
};
console.log(6 == searchInsert([1, 3, 5, 7, 9, 11, 13], 13));
console.log(0 == searchInsert([1, 3, 5, 7, 9, 11, 13], 0));
console.log(1 == searchInsert([1, 3, 5, 7, 9, 11, 13], 2));
console.log(7 == searchInsert([1, 3, 5, 7, 9, 11, 13], 14));
console.log(6 == searchInsert([1, 3, 5, 7, 9, 11], 14));
console.log(3 == searchInsert([1, 3, 5, 7, 9, 11], 7));
console.log(3 == searchInsert([1, 3, 5, 7, 9, 11], 6));
let arrs = [[1, 3, 5, 7, 9, 11], [], [1, 3, 4]];
for (let k = 0; k < arrs.length; k++) {
  let arr = arrs[k];
  for (let i = -1; i <= arr.length; i++) {
    if (i == -1) {
      console.log(searchInsert(arr, arr[0] - 1) == 0);
    } else if (i == arr.length) {
      console.log(searchInsert(arr, arr[arr.length - 1] + 1) == arr.length);
    } else {
      console.log(searchInsert(arr, arr[i]) == i);
    }
  }
}
