//https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let finalSum = nums[0] + nums[1] + nums[2];
  console.log({ finalSum });
  for (let i = 0; i <= nums.length - 3; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;
    let intTarget = target - nums[i];
    // console.log({finalSum})
    // console.log({i});
    // console.log({intTarget});
    while (hi > lo) {
      let currentSum = nums[i] + nums[lo] + nums[hi];
      //   console.log({lo},{hi});
      // console.log({ currentSum });
      if (Math.abs(currentSum - target) < Math.abs(finalSum - target)) {
        finalSum = currentSum;
      }
      //   console.log({ finalSum });
      //   console.log("_________");
      if (nums[hi] + nums[lo] <= intTarget) {
        while (nums[lo] == nums[lo + 1]) {
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
  return finalSum;
};

// console.log(threeSumClosest([-4, -1, 1, 2], 1));
// console.log(threeSumClosest([0,0,0], 1));
console.log(threeSumClosest([-3, 0, 1, 2], 1));
