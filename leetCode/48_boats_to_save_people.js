// https://leetcode.com/problems/boats-to-save-people/
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people = people.sort((a, b) => a - b);
  let boats = 0;
  let hi = people.length - 1;
  let lo = 0;

  while (hi > lo) {
    if (people[hi] + people[lo] > limit) {
      boats++;
      hi--;
    } else {
      lo++;
      hi--;
      boats++;
    }
  }
  if (hi === lo) {
    boats++;
  }
  return boats;
};

console.log(numRescueBoats([1, 2, 2, 3], 3));
console.log(numRescueBoats([2, 3, 3, 4, 5], 5));
