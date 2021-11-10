// https://leetcode.com/problems/find-a-peak-element-ii/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  let highColumn = mat.length - 1;
  let lowColumn = 0;
  while (highColumn >= lowColumn) {
    let mid = Math.floor((highColumn + lowColumn) / 2);
    // find largest of the mid column
    let largestOfColumn = 0;
    for (let i = 0; i < mat[mid].length; i++) {
      if (mat[mid][i] > mat[mid][largestOfColumn]) {
        largestOfColumn = i;
      }
    }
    let previousColumn = mid - 1;
    let nextColumn = mid + 1;
    if (mid === 0) {
      previousColumn = mid;
    }
    if (mid === mat.length - 1) {
      nextColumn = mid;
    }
    if (
      mat[mid][largestOfColumn] >= mat[previousColumn][largestOfColumn] &&
      mat[mid][largestOfColumn] >= mat[nextColumn][largestOfColumn]
    ) {
      return [mid, largestOfColumn];
    }
    if (mat[mid][largestOfColumn] < mat[previousColumn][largestOfColumn]) {
      highColumn = mid - 1;
    } else {
      lowColumn = mid + 1;
    }
  }
  return [-1, -1];
};

console.log(findPeakGrid([
  [100, 0, 0, 0, 0, 0],
  [50, 100, 0, 500, 10, 900],
  [0, 120, 150, 180, 0, 0],
]));

console.log(findPeakGrid([
    [100, 0, 0, 0, 0, 0],
    [50, 100, 0, 500, 1000, 900],
    [0, 120, 150, 180, 0, 0],
  ]));
  console.log(findPeakGrid([
    [100, 0, 0, 0, 0, 0],
    [50, 100, 0, -500, 10, -900],
    [0, 120, 150, 180, 0, 900],
  ]));
