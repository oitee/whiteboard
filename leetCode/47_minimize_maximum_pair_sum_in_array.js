// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let hi = nums.length - 1;
  let lo = 0;
  let res = nums[lo] + nums[hi];
  while(hi > lo){
      let currentSum = nums[hi] + nums[lo];
      if(currentSum > res){
          res = currentSum;
      }
      hi--;
      lo++;
  }
  return res;
};

console.log(minPairSum([1, 1, 1, 1, 1, 5]));
console.log(minPairSum([1, 2, 3, 4, 5, 6]));
console.log(minPairSum([-11, 1, 2, 3, 4, 5, 6]));
console.log(minPairSum([-11, 0, 0, 0, 0, 0, 1]));
