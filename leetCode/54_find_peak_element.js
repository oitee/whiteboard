// https://leetcode.com/problems/find-peak-element/


// Go to mid element
// is it a peak?, If yes return that index
// if not, is the element next to it greater than itself?
// if yes, it means mid is part of a ascending slope; peak to be on the right hand side
//if not, it means mid is part of a descending slope; peak to be on the left side
// if l == r, it means we have reached the end of the array, and return that index;



/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  return search(0, nums.length - 1);
  
  function search(lo, hi){
      let mid = Math.floor((lo + hi) / 2);
      if(lo == hi){
          return lo;
      }
      if(nums[mid - 1] <= nums[mid] && nums[mid + 1] <= nums[mid]){
          return mid;
      }
      if(nums[mid + 1] >= nums[mid]){ //ascending slope
        return search(mid + 1, hi);
      }
      return search(lo, mid)//! mid -1 would result in lo> hi, if hi - lo = 1;
  }
};


console.log(findPeakElement([1, 2, 3, 4, 5]));
console.log(findPeakElement([5, 4, 3, 2, 1]));
console.log(findPeakElement([1, 2, 3, 4, 5, 4, 2, 1]));
console.log(findPeakElement([1, 2, 4, 3, 4, 5, 7]));