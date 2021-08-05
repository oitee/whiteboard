//implementing binary search,
//but not providing for the correct index if the target value is not present in the array

function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor((high - low) / 2) + low; //this gives us the mid-point element

    console.log("low: " + low);
    console.log("high: " + high);
    console.log("mid: " + mid);
    if (nums[mid] == target) {
      return mid;
    }
    //if target is greater than nums[mid], the next iteration should look at nums[mid + 1] to nums[high]
    if (target > nums[mid]) {
      low = mid + 1;
    }
    //if target is less than nums[mid], the next iteration should look at nums[low] to nums[mid - 1]
    else {
      high = mid - 1;
    }
  }
  return -1; // this will signify that the target is not present in the array nums
}
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 0))

/*console.log(6 == binarySearch([1, 3, 5, 7, 9, 11, 13], 13));
console.log(-1 == binarySearch([1, 3, 5, 7, 9, 11, 13], 0));
console.log(-1 == binarySearch([1, 3, 5, 7, 9, 11, 13], 2));
console.log(-1 == binarySearch([1, 3, 5, 7, 9, 11, 13], 14));
console.log(3 == binarySearch([1, 3, 5, 7, 9, 11], 7));
*/