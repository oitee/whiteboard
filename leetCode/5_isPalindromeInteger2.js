//https://leetcode.com/problems/palindrome-number/
//attempting with better logic
//aim is to terminate the loop when we reach the mid-point, ie, when x <= reverse

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let lastDigit = x % 10;
  if (lastDigit == 0) {
    if (x == lastDigit) {
      return true;
    }
    return false;
  }
  let reverse = 0;
  while (x > reverse) {
      reverse = reverse * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    if (reverse == x || Math.floor(reverse / 10) == x) {
      return true;
    }
    return false;
  
};
console.log(isPalindrome(123)); //false
console.log(isPalindrome(-123)); //false
console.log(isPalindrome(100)); //false
console.log(isPalindrome(0)); //true
console.log(isPalindrome(1)); //true
console.log(isPalindrome(12121)); //true
console.log(isPalindrome(1221)); //true
