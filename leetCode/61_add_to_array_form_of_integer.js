// https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let carry = 0;
  //console.log({k})
  for (let i = num.length - 1; i >= 0; i--) {
    let lastDigitK = 0;
    if (k !== 0) {
      lastDigitK = k % 10;
      k = Math.floor(k / 10);
      //console.log({k})
    }
    
    let sumOfDigits = lastDigitK + carry + num[i];
    if (Math.abs(sumOfDigits) < 9) {
      num[i] = sumOfDigits;
      carry = 0;
    } else {
      carry = Math.floor(sumOfDigits / 10);
      num[i] = sumOfDigits % 10;
    }
    if (k === 0 && carry === 0) {
      break;
    }
  }
  while (carry !== 0 || k !== 0) {
    // console.log({k})
    // console.log({carry})
    // console.log({num})
    // console.log(`====....===`)
    let lastDigitK = 0;
    if (k !== 0) {
      lastDigitK = k % 10;
      k = Math.floor(k / 10);
    }
    const sumOfKAndCarry = carry + lastDigitK;
    if (sumOfKAndCarry < 9) {
      num.unshift(sumOfKAndCarry);
      carry = 0;
    } else {
      carry = Math.floor(sumOfKAndCarry / 10);
      num.unshift(sumOfKAndCarry % 10);
    }
  }
  // console.log(`@!!@`)
  return num;
};

const X = addToArrayForm([1, 0, 0, 0], 7);
const Y = addToArrayForm([1, 0, 0, 5], 7);
const Z = addToArrayForm([9, 9, 9], 1);
const A = addToArrayForm([8, 8, 8], 11);
const B = addToArrayForm([1, 0, 0, 1], 0);
const C = addToArrayForm([9, 9], 1000);
const D = addToArrayForm([0], 23); 
const E = addToArrayForm([2,3], 0);


console.log(`Expected: [1, 0, 0, 7]`);
console.log(X);
console.log(`===========`);

console.log(`Expected: [1, 0, 1, 2]`);
console.log(Y);
console.log(`===========`);

console.log(`Expected: [1, 0, 0, 0]`);
console.log(Z);
console.log(`===========`);

console.log(`Expected: [8, 9, 9]`);
console.log(A);
console.log(`===========`);

console.log(`Expected: [1, 0, 0, 1]`);
console.log(B);
console.log(`===========`);


console.log(`Expected: [1, 0, 9, 9]`);
console.log(C);
console.log(`===========`);

console.log(`Expected: [2, 3]`);
console.log(D);
console.log(`===========`);

console.log(`Expected: [2, 3]`);
console.log(E);
console.log(`===========`);