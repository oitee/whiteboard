//https://leetcode.com/problems/3sum/
var threeSum = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 3; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;
    if(nums[i] > 0){//! Improvement
      return result;
    }
    let intSum = 0 - nums[i];
    while (lo < hi) {
      if(nums[lo] > intSum || nums[hi] < intSum){
        break;
      }
      if (nums[hi] + nums[lo] == intSum) {
        result.push([nums[i], nums[lo], nums[hi]]);
        while (nums[lo] == nums[lo + 1]) {
          lo++;
        }
        while (nums[hi] == nums[hi - 1]) {
          hi--;
        }
        hi--;
        lo++;
      } else {
        if (nums[lo] + nums[hi] < intSum) {
          
          while(nums[lo] === nums[lo + 1]){
            lo++;
          }
          lo++;
        } else {
          while(nums[hi] === nums[hi - 1]){
            hi--;
          }
          hi--;
        }
      }
    }
    while(nums[i] == nums[i + 1]){
        i++;
    }
  }
  return result;
};

//console.log(threeSum([2, -1, -1]));
//console.log(threeSum([-1, -1, -1, 2]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([]));
// console.log(threeSum([0, 0, 0]));
 console.log(threeSum([ -10, -7, -5,  0, 2,  3,  5, 10, 1000 ]));

