/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/
 */
var oldTwoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
};

var twoSum = function (nums, target) {
  let memo = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString() in memo) {
      let tempProp2 = nums[i];
      return [i, memo[tempProp2]];
    }

    let tempProp = target - nums[i];
    memo[tempProp] = i;
  }
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 10));
