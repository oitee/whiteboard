// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
 
  if (nums.length !== 1 && nums.length !== 0) {//if one element array, why reverse?
    
    k = k % nums.length;//! very important: k need not be less than nums.length
    reverse(0, nums.length - 1);
    reverse(0, k - 1);//zero index
    reverse(k, nums.length - 1);
    function reverse(lo, hi) {
      while (lo < hi) {
        let temp = nums[lo];
        nums[lo] = nums[hi];
        nums[hi] = temp;
        hi--;
        lo++;
      }
    }
    
  }
  console.log(nums);
};

 rotate([0, 1, 2, 3, 4, 5, 6, 7, 8], 3);
// rotate([1, 2, 3, 4, 5, 6, 7], 3);

// rotate([1, 2, 3, 4, 5, 6, 7], 1);
// rotate([1, 2, 3, 4, 5, 6, 7], 6);
 rotate([1, 2, 3, 4, 5, 6, 7], 4);
rotate([1],1);
rotate([1], 2)
