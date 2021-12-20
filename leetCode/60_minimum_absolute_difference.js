//https://leetcode.com/problems/minimum-absolute-difference/
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let shortestDistance;
  let shortestPair = [];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    let currentDistance = Math.abs(sortedArray[i] - sortedArray[i + 1]);
    if (!shortestDistance || currentDistance < shortestDistance) {
      shortestDistance = currentDistance;
      shortestPair = [];
      shortestPair.push([arr[i], arr[i + 1]]);
    } else if (currentDistance === shortestDistance) {
      shortestPair.push([arr[i], arr[i + 1]]);
    }
  }
  return shortestPair;
};

let X = minimumAbsDifference([1, 2, 99]);
let Y = minimumAbsDifference([-1, -2, -99]);
let Z = minimumAbsDifference([1, 2, 3, 4]);
let A = minimumAbsDifference([2, 4, 6, 8, 10]);
let B = minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]);

// console.log(`expected [[1,2]]`);
// console.log(X);
// console.log(`========`);

// console.log(`expected [[-1,-1]]`);
// console.log(Y);
// console.log(`========`);

// console.log(`expected [[1, 2], [2, 3], [3, 4]]`);
// console.log(Z);
// console.log(`========`);

// console.log(`expected [[2, 4], [4, 6], [6, 8], [8, 10]]`);
// console.log(A);
// console.log(`========`);

console.log(`expected [[-14,-10],[19,23],[23,27]]`);
console.log(B);
console.log(`========`);
