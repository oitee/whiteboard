//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function(numbers, target) {
  let lo = 0;
  let hi = numbers.length - 1;
  while(lo < hi){
    let sum = numbers[lo] + numbers[hi];  
    if(sum === target){
          return [lo + 1, hi + 1]
      }
      if(sum < target){
          lo = lo + 1;
      }
      else{
          hi = hi - 1;
      }
  }

};  


console.log(twoSum([1, 2, 3, 4, 11], 15));