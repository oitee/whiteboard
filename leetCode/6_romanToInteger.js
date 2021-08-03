//https://leetcode.com/problems/roman-to-integer/
var romanToInt = function (s) {
  let arr = [...s];
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
      if (roman[arr[i]] < roman[arr[i+1]]){
        result = result - roman[arr[i]] + roman[arr[i+1]];
        i++;
      }
      else{
          result = result + roman[arr[i]];
      }
  }
  return result;
};
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));