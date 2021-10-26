// https://leetcode.com/problems/next-permutation/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let index = nums.length - 1;
  let smaller;
  let reversed = false;
  while (index > 0) {
    if (nums[index] > nums[index - 1]) {
      let replacingIndex = findSuccessor(index - 1);
      let temp = nums[index - 1];
      nums[index - 1] = nums[replacingIndex];
      nums[replacingIndex] = temp;
      reverse(index);
      reversed = true;
      break;
    }
    index--;
  }
  if (!reversed) {
    reverse(0);
  }
  function reverse(lo) {
    let hi = nums.length - 1;
    while (lo < hi) {
      let temp = nums[hi];
      nums[hi] = nums[lo];
      nums[lo] = temp;
      lo++;
      hi--;
    }
  }
  function findSuccessor(lo) {
    for (let i = nums.length - 1; i > lo; i--) {
      if (nums[i] > nums[lo]) {
        return i;
      }
    }
  }
  console.log(nums);
};

// [1,5,3,2]
// [1,5,2,3]
// [1, 2, 5, 3]--> [1, 2, 3, 5]
//[2, 1, 3, 5]

nextPermutation([1, 5, 3, 2]);
nextPermutation([1, 2, 3, 4]);
nextPermutation([4, 3, 2, 1]);
nextPermutation([1, 8, 5, 4, 1]);
// nextPermutation([2,3,6,5,4,1])
