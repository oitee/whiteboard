//Given an integer array, find the contiguous subarray with the largest sum and return the sum
//https://leetcode.com/problems/maximum-subarray/
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