//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    if (x < 0){
        return false;
    }
    let lastDigit = x % 10;
    if (lastDigit == 0){
        if (x == lastDigit){
            return true;
        }
        return false;
    }
    let reverse = 0;
    
    for (let i = x; i > 0; i = Math.floor(i/10)){
        reverse = (reverse * 10) + (i % 10);
    }
    if (reverse == x){
        return true;
    }
    return false;

    
};
console.log(isPalindrome(123));//false
console.log(isPalindrome(-123));//false
console.log(isPalindrome(100));//false
console.log(isPalindrome(0));//true
console.log(isPalindrome(1));//true
console.log(isPalindrome(12121));//true
