// https://leetcode.com/problems/search-a-2d-matrix-ii/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
  let currentRow = 0;
  let currentColumn = matrix[currentRow].length - 1;

  while (currentRow <= matrix.length - 1 && currentColumn >= 0) {
      console.log("current Element: " + matrix[currentRow][currentColumn]);
    if (target === matrix[currentRow][currentColumn]) {
      return true;
    }
    if (target > matrix[currentRow][currentColumn]) {
      currentRow++;
    } else {
      currentColumn--;
    }
  }
  return false;
};

console.log(
  searchMatrix([
    [1, 2, 3],
    [4, 6, 9],
    [7, 8, 10],
    [8, 9, 11],
  ], 10)
);

console.log(
    searchMatrix([
      [1, 2, 3],
      [4, 6, 9],
      [7, 8, 10],
      [8, 9, 11],
    ], 5)
  );

  console.log(
    searchMatrix([
      [1, 2, 3],
      [4, 6, 9],
      [7, 8, 10],
      [8, 9, 11],
    ], 110)
  );
  console.log(
    searchMatrix([
      [1, 2, 3],
      [4, 6, 9],
      [7, 8, 10],
      [8, 9, 11],
    ], -10)
  );