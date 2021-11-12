// https://leetcode.com/problems/find-the-duplicate-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let hi = nums.length - 1;
  let lo = 1;
  let result = nums.length;

  while (hi >= lo) {
    let mid = Math.floor((hi + lo) / 2);
    let count = findNumbersLessThan(mid);
    console.log(`when mid is ${mid}, count = ${count}`)
    if (count > mid) {
      console.log(`old result: ${result}`)
        result = Math.min(result, mid);
        console.log(`new result: ${result}`)
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  function findNumbersLessThan(n) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= n) {
        count++;
      }
    }
    return count;
  }
  if (result === nums.length) {
    return -1;
  }
  return result;
};

console.log(findDuplicate([1, 2, 3, 4, 4]) === 4);
console.log(findDuplicate([1, 2, 3, 4, 1]) === 1);
console.log(findDuplicate([4, 3, 2, 1, 4]) === 4);
console.log(findDuplicate([4, 3, 2, 1, 1]) === 1);
console.log(findDuplicate([5, 3, 2, 1, 1, 1]) === 1);
console.log(findDuplicate([1,3,4,2,2]) === 2);
console.log(findDuplicate([3,1,3,4,2]) === 3);
console.log(findDuplicate([1,1]) === 1);
console.log(findDuplicate([1,1,2]) === 1);