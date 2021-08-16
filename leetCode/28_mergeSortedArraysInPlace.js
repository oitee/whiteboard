//https://leetcode.com/problems/merge-sorted-array/
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let combined = m + n - 1;
    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[combined--] = nums1[i--];
        }
        else{
            nums1[combined--] = nums2[j--]
        }
    }
    while(j >= 0){
        nums1[combined--] = nums2[j--];
    }
}
let a = [1, 3, 7, 9, 0, 0, 0];
let b = [11, 21, 41,];
merge(a, 4, b, 3);
console.log(a);
