//https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 4; i++) {// ! i <= nums.length - 4

    for (let j = i + 1; j <= nums.length - 3; j++) {
      let lo = j + 1;
      let hi = nums.length - 1;
      let intTarget = target - nums[i] - nums[j];
      while (lo < hi) {
        if (nums[lo] + nums[hi] === intTarget) {
            // console.log(`inserting: ${[nums[i], nums[j], nums[lo], nums[hi]]}`);
            // console.log({i}, {j}, {lo}, {hi});
            res.push([nums[i], nums[j], nums[lo], nums[hi]]);
            // console.log("______")
          while (nums[lo] === nums[lo + 1]) {
            lo++;
          }
          while (nums[hi] === nums[hi - 1]) {
            hi--;
          }
          lo++;
          hi--;
        } else {
          if (nums[lo] + nums[hi] < intTarget) {
            while (nums[lo] === nums[lo + 1]) {
              lo++;
            }
            lo++;
          } else {
            while (nums[hi] === nums[hi - 1]) {
              hi--;
            }
            hi--;
          }
        }
      }
      while (nums[j] === nums[j + 1]) {
        j++;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return res;
};
//console.log(fourSum([0, 0, 0, 1, 1, 2, 4, 6, 8, 10], 8));
  //console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([-5, -3, 0, 1, 3, 4, 8, 88], 8));
// console.log(fourSum([2, 2, 2, 2, 2], 8));
//  console.log(fourSum([2, 2, 2, 2], 8));
 // console.log(fourSum([2, 2, 2, 2, 2, 2, 2], 8));
// console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0))
console.log(fourSum([0,0,0,0], 0))