// Second attempt, after looking into discussion section
//Remove Duplicates from Sorted Array
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
    if(nums.length < 2){
        return nums.length;
    }
    let insertIndex = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i - 1]){
            nums[insertIndex] = nums[i];
            insertIndex = insertIndex + 1;
        }
    }
    return insertIndex++;
}

let arr1 = [1, 1, 1, 1, 2, 3];
console.log("my arr1 =" + arr1);
console.log("return value of nums " + removeDuplicates(arr1));
console.log(arr1); 

let arr2 = [0, 1, 1, 1, 2, 3];
console.log("my arr2 =" + arr2);
console.log("return value of nums " + removeDuplicates(arr2));
console.log(arr2); 

let arr3 = [0, 1, 2, 3, 3];
console.log("my arr1 =" + arr3);
console.log("return value of nums " + removeDuplicates(arr3));
console.log(arr3); 