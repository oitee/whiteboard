// https://leetcode.com/problems/first-bad-version/submissions/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let hi = n;
        let lo = 0;
        let result;
        while(lo <= hi){
            let mid = Math.floor((lo + hi)/2);
            if(isBadVersion(mid)){
                result = mid;
                hi = mid - 1;
            }
            else{
                lo = mid + 1;
            }
        }
        return result;
    };
};