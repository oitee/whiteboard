// https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    // console.log(`${lo} , nums[lo]: ${nums[lo]}`);
    // console.log(`${hi} , nums[hi]: ${nums[hi]}`);
    let mid = Math.floor((lo + hi) / 2);
    // console.log(`${mid} , nums[mid]: ${nums[mid]}`);
    // console.log("_________")
    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  if (target === nums[lo]) {
    return lo;
  }
  if (target < nums[lo]) {
    return -1;
  }
  if (lo > 0 && target > nums[lo - 1]) {
    return -1;
  }
  if (target <= nums[nums.length - 1]) {
    hi = nums.length - 1;
  } else {
    hi = lo - 1; //because nums[lo] !== target at this point
    lo = 0;
  }
  //ordinary binary search
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      // if(target < nums[mid])
      hi = mid - 1;
    }
  }
  return -1;
};

// [1, 2, 3, 4, 5, 6, 7]
console.log(search([6, 7, 1, 2, 3, 4, 5], 3) === 4);
console.log(search([6, 7, 1, 2, 3, 4, 5], 6) === 0);
console.log(search([6, 7, 1, 2, 3, 4, 5], 7) === 1);
console.log(search([6, 7, 1, 2, 3, 4, 5], 5) === 6);
console.log(search([6, 7, 1, 2, 3, 4, 5], 1) === 2);
console.log(search([2, 3, 4, 5, 6, 7, 1], 2) === 0);
console.log(search([2, 3, 4, 5, 6, 7, 1], 1) === 6);
console.log(search([2, 3, 4, 5, 6, 7, 1], 5) === 3);
console.log(search([2, 3, 4, 5, 6, 7, 1], 7) === 5);
console.log(search([2, 3, 4, 5, 6, 7, 1], 11) === -1);
console.log(search([2, 3, 4, 5, 6, 7, 1], -1) === -1);
console.log(search([2], 2) === 0);

// first, lets find the smallest element. This gives us the original starting element, or, the 'lo'
// 0) target is nums[lo]
// a) target is less than nums[lo] => -1
// b) highest is nums[lo - 1]; thus, if target is greater than nums[lo -1] => -1
//c) target is greater than [lo] but less than [length - 1] => lo = lo and hi = nums.length -1;
// d) target is greater than [lo] but greater than [length -1] => lo = 0; hi = lo - 1;
