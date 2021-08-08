//Given an integer array, find the contiguous subarray with the largest sum and return the sum
//https://leetcode.com/problems/maximum-subarray/
/*var maxSubArray = function (nums) {
  let currentSum;
  let largestSum;
  for (let i = 0; i < nums.length; i++) {
    if (currentSum == undefined) {
      currentSum = nums[i];
      if (currentSum > largestSum || largestSum == undefined) {
        largestSum = currentSum;
      }
    }  else if (nums[i] >= 0) {
      currentSum = currentSum + nums[i];
      if (currentSum > largestSum || largestSum == undefined) {
        largestSum = currentSum;
      }
    } else {
      if (currentSum < 0) {
        currentSum = nums[i];
        if (currentSum > largestSum || largestSum == undefined) {
          largestSum = currentSum;
        }
      } else if (i != nums.length -1) {
        let j = i + 1;
        intermediateSum = nums[j];
        intermediateCumulative = nums[j];
        while (j < nums.length) {
          j++;
          intermediateSum += nums[j];
          if (intermediateSum > intermediateCumulative) {
            intermediateSum = intermediateCumulative;
          }
        }
        if ((currentSum + nums[i] + intermediateCumulative) > intermediateCumulative) {
          currentSum = currentSum + intermediateCumulative;
          if (currentSum > largestSum || largestSum == undefined) {
            largestSum = currentSum;
          }
          currentSum = undefined;
        } else {
          currentSum = undefined;
        }
      }
    }
  }
  return largestSum;
};

console.log(maxSubArray([10, 12, 20, 10]));
console.log(maxSubArray([10, 12, -1, 20, 10]));
console.log(maxSubArray([-100, -1, 0, -2, 1]));
console.log(maxSubArray([3, 2, -100, 3]));
console.log();
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([1]));
*/

var maxSubArray = function (nums){
currentSum = nums[0];
largestSum = currentSum;
    for (let i = 1; i < nums.length; i++){
        if(currentSum < 0){
            currentSum = nums[i];
        }
        else{
            currentSum = currentSum + nums[i];
        }
        if(largestSum < currentSum){
            largestSum = currentSum;
        }
    }
    return largestSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-100, -1, 0, -2]));