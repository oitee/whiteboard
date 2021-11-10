// https://leetcode.com/problems/search-a-2d-matrix/

//find the mid array
// if target is less than first element of mid array=> search again, with hi = mid -1
// else if target is greater than last element of mid array => search again, with lo = mid + 1
// else binary search mid array

var searchMatrix = function (matrix, target) {
  let hi = matrix.length - 1;
  let lo = 0;

  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    // console.log({hi}, {lo}, {mid});
    // console.log(matrix[mid][matrix[mid].length - 1]);
    if (target < matrix[mid][0]) {
      hi = mid - 1;
    } else {
      if (target > matrix[mid][matrix[mid].length - 1]) {
        lo = mid + 1;
      } else {
        // console.log("binary Search")
        return binarySearch(matrix[mid]);
      }
    }
  }
  return false;

  function binarySearch(arr) {
    let hi = arr.length - 1;
    let lo = 0;
    // console.log({ target });
    // console.log({ arr });
    while (hi >= lo) {
      let mid = Math.floor((hi + lo) / 2);
      // console.log({ hi }, { lo }, { mid });
      if (arr[mid] === target) {
        return true;
      }
      if (target > arr[mid]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return false;
  }
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    60
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    1
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    15
  ) === false
);
console.log(searchMatrix([[1, 3, 5, 7]], 15) === false);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
      [61, 67, 66],
    ],
    15
  ) === false
);
console.log(searchMatrix([[1, 3, 5, 7]], 13) === false);
