//https://leetcode.com/problems/reverse-integer/
var reverse = function (x) {
  let memo = { negative: false };
  let result = 0;
  if (x < 0) {
    x = -x;
    memo.negative = true;
  }
  for (let i = x; i > 0; i = Math.floor(i / 10)) {
    result = result * 10 + (i % 10);
  }
  if (memo.negative) {
    result = -result;
  }
  
  if (result < Math.pow(-2, 31) || result > ((Math.pow(2, 31)) - 1) ) {
      return 0;
  }
  return result;
};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(100));
console.log(reverse(001));
console.log(reverse(0));

