var maxSubArray = function (nums){
    currentSum = nums[0];
    largestSum = currentSum;
        for (let i = 1; i < nums.length; i++){
            if((currentSum + nums[i]) < nums[i]){
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