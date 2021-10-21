// https://leetcode.com/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let hi = nums.length -1;
    let lo = 0;
    let result = []
    let resultIndex = nums.length - 1;
    while(hi >= lo){
        if(Math.abs(nums[hi]) >= Math.abs(nums[lo])){
            result[resultIndex--] = nums[hi] * nums[hi];
            hi--; 
        }
        else{
            result[resultIndex--] = nums[lo] * nums[lo];
            lo++;
        }
    }
    return result;
};

console.log(sortedSquares([-11, -1, 0, 2, 3]))
console.log(sortedSquares([-11, -7, 0, 2, 3]))
console.log(sortedSquares([2, 3, 5, 7]))
console.log(sortedSquares([-11, -1, 0, 2, 3, 15]))
