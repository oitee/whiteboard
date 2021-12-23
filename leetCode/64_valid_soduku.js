// https://leetcode.com/problems/valid-sudoku/

// Find out the length of the 2D array
// find out the breadth of the 2D array
// if both do not match, return false
// create two arrays: rows and columns
// run a loop for the length times, at each iteration create 2 new maps at row[i] and colum[i]
// now iterate through each cell of each row,
// for every value, if it is not empty, check if either the row equivalent or column equivalent has that, if yes--> false
// else, add the values there.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (board.length !== 9 || board[0].length !== 9) {
    return false;
  }
  const box = [];
  for (let i = 0; i < 9; i++) {
    box[i] = new Set();
  }

  const rows = [];
  const columns = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set();
    columns[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const current = board[i][j];

      if (current !== ".") {
        //console.log(current);
        // let boxNo = boxNumber(i, j);
        // console.log({ boxNo });
        if (
          rows[i].has(current) ||
          columns[j].has(current) ||
          box[boxNumber(i, j)].has(current)
        ) {
          return false;
        }
        rows[i].add(current);
        columns[j].add(current);
        box[boxNumber(i, j)].add(current);
      }
    }
  }
  return true;

  function boxNumber(row, column) {
    // console.log({ row });
    // console.log({ column });
    if (row <= 2) {
    //   console.log(`less than2`);
      if (column >= 0 && column <= 2) {
        // console.log(`correct no is 0`);
        return 0;
      }
      if (column >= 3 && column <= 5) {
        // console.log(`correct no is 1`);
        return 1;
      } else {
        // console.log(`correct no is 2`);
        return 2;
      }
    } else if (row <= 5) {
      if (column >= 0 && column <= 2) {
        // console.log(`correct no is 3`);
        return 3;
      }
      if (column >= 3 && column <= 5) {
        // console.log(`correct no is 4`);
        return 4;
      } else {
        // console.log(`correct no is 5`);
        return 5;
      }
    } else if (row <= 8) {
      if (column >= 0 && column <= 2) {
        // console.log(`correct no is 6`);
        return 6;
      }
      if (column >= 3 && column <= 5) {
        // console.log(`correct no is 7`);
        return 7;
      } else {
        // console.log(`correct no is 8`);
        return 8;
      }
    }
  }
};

const sudoku = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", "8", "4", "3", "9", "7", "6", "2", "1"],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

const sudoku2 = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", "8", "7", "3", "9", "2", "6", "4", "1"],
  ["1", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

const sudoku3 = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

// console.log(sudoku3.length);
// console.log(sudoku3[0].length)
console.log(isValidSudoku(sudoku));
console.log(isValidSudoku(sudoku2));
console.log(isValidSudoku(sudoku3));
