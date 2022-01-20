//https://leetcode.com/problems/maximal-square/

// create a matrix, dp, of the same size
// fill each element of that with 0
// now for our main matrix, for every 1 we come across,
// we enter it on our dp
// but the value should be 1 + minimum of (left, top-right and up-diagonal matrices)
// why top-right etc? Because in our main matrix, we started from (0, 0)
// So as we go bottom-right in the matrix, we keep looking up-left on the dp,to find fully filled  squares
// keep a tab of the largest side
// now, we just square the largest side to get the result

var maximalSquare = function (matrix) {
  let dp = [];
  dp.length = matrix.length;
  dp = dp.fill(0);
  dp = dp.map((el) => {
    let arr = [];
    arr.length = matrix[0].length;
    arr.fill(0);
    return arr;
  });

  let longestSideOfASquare = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      //console.log(`${i}, ${j}`)
      let currentCell = matrix[i][j];
      if (currentCell === "1") {
          // if either i or j is 0, it means that the current element is 
          // on the first row or first coloumn (or both) 
          // this means that at least one of 
          // left, top or diagonal neighbour of the current element will be undefined
          // for our purposes, we can assume undefined to be 0 (as it does contribute to form a square)
          // because the value of the dp at [i][j] is the minimum of its neighbours
          // if either i or j is 0, it implies the lowestof its neighbours will automatically be zero
        if (i === 0 || j == 0) {
          dp[i][j] = 1 + 0;
          longestSideOfASquare = Math.max(dp[i][j], longestSideOfASquare);
        } else {
          let left = dp[i - 1][j];
          let top = dp[i][j - 1];
          let diagonal = dp[i - 1][j - 1];
          dp[i][j] = 1 + Math.min(left, top, diagonal);
          longestSideOfASquare = Math.max(dp[i][j], longestSideOfASquare);
        }
      }
    }
  }
  console.log(dp);
  console.log(longestSideOfASquare * longestSideOfASquare);
  return longestSideOfASquare * longestSideOfASquare;
};

maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
]);

maximalSquare([["0"]]);
