var merge = function(nums1, m, nums2, n) {
    let temp = [];
    let tempIndex = 0;
    let j = 0;
    let i = 0;
    while(i < m || j < n){
        if(i < m && j < n){
            if(nums1[i] <= nums2[j]){
                temp[tempIndex++] = nums1[i++];
            }
            else{
                temp[tempIndex++] = nums2[j++];
            }
        }
        else{
            if(j >= n){
                temp[tempIndex++] = nums1[i++];
            }
            else{
                temp[tempIndex++] = nums2[j++];
            }
            
        }
    }
    for(let o = 0; o < temp.length; o++){
        nums1[o] = temp[o];
    }
};
let a = [1, 3, 7, 9, 0, 0, 0];
let b = [1, 2, 4,];
merge(a, 4, b, 3);
console.log(a);
