//Given sorted array and a target integer, return the index of target in nums
//if target is not present, return the correct index where it should be inserted
//Although the problem requires a O(log n), writing the a solution with O(n)
//in the next file, I will implement binary search 

function searchAndInsert(nums, target) {
  insertIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
    if (target > nums[i]) {
      insertIndex = i + 1;
    }
  }
  return insertIndex;
}
console.log(6 == searchAndInsert([1, 3, 5, 7, 9, 11, 13], 13));
console.log(0 == searchAndInsert([1, 3, 5, 7, 9, 11, 13], 0));
console.log(1 == searchAndInsert([1, 3, 5, 7, 9, 11, 13], 2));
console.log(7 == searchAndInsert([1, 3, 5, 7, 9, 11, 13], 14));
console.log(6 == searchAndInsert([1, 3, 5, 7, 9, 11], 14));
console.log(3 == searchAndInsert([1, 3, 5, 7, 9, 11], 7));
console.log(3 == searchAndInsert([1, 3, 5, 7, 9, 11], 6));
