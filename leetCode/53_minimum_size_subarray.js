// https://leetcode.com/problems/minimum-size-subarray-sum/


//iterate i till nums.length -1
//keep adding ith element to sum (starting with zero)
//the moment sum >= target, do another iteration from start(initally zero) and at each time reduce sum by [start] and stop iteration moment sum < target



/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let sum = 0, start = 0, found = false;
    let length = Number.MAX_SAFE_INTEGER;
   
    for(let i = 0; i <= nums.length - 1; i++){
        // console.log({start}, {i})
        sum = sum + nums[i];
        if(sum >= target){
            found = true;
            //length = Math.min(length, (i - start));
            
            let intSum = sum;
            while(intSum >= target && start <= i){
                sum = intSum;
                // console.log({start}, {intSum})
                
                
                intSum = intSum - nums[start];
                start++;
                
            }
            // console.log({start})
            start--;
            length = Math.min(length, (i - start));
            // console.log({length}, {start});
        }
    }
    if(found){
        return length + 1;
    }
    return 0;
};

// console.log(minSubArrayLen(1, [11, 1, 2])==1);
// console.log(minSubArrayLen(11, [11, 1, 2])==1);
// console.log(minSubArrayLen(13, [11, 1, 2])=== 3);
// console.log(minSubArrayLen(1, [1, 2, 11])==1);
// console.log(minSubArrayLen(5, [11, 1, 2, 11])==1);
// console.log(minSubArrayLen(7, [3, 4, 1, 2])==2);
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))