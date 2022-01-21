//https://leetcode.com/problems/longest-increasing-subsequence/

// Brute force DFS approach
// Given an array, you call a helper fn(index, arr) ; for the first time, you call this for all indices
// within the helper function, you have a reference point (an index) and a data set
// lets call the element at the reference point, 'candidate'
// From here, you call the helper function for all **subsequent** elements in the data set(ie, all elements that are after candidate)
// PROVIDED THAT, each of those elements are greater than the element at the reference element
// ie you drop the elements smaller than or equal to the candidate
// You do max of the values you receive and return that by **adding one**, ie, attaching the count for the reference candidate
// at the top level also, you do a max of the values received for all elements you called the helper function on.

var lengthOfLIS = function (nums) {
  let memo = new Map();
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentLongest = helper(nums, i);
    // console.log(nums[i])
    // console.log({currentLongest});
    // console.log(`...`)
    longest = Math.max(longest, currentLongest);
  }
  console.log(longest);
  return longest;

  function helper(dataSet, candidateIndex) {
    if (candidateIndex >= dataSet.length) {
      return 0;
    }

    if (memo.has(candidateIndex)) {
      return memo.get(candidateIndex);
    }
    let longestSequenceLength = 1;
    for (let j = candidateIndex + 1; j < dataSet.length; j++) {
      if (dataSet[j] > dataSet[candidateIndex]) {
        //console.log(helper(dataSet, j))
        let currentSequenceLength = 1 + helper(dataSet, j);
        longestSequenceLength = Math.max(
          currentSequenceLength,
          longestSequenceLength
        );
      }
    }
    memo.set(candidateIndex, longestSequenceLength);
    return longestSequenceLength;
  }
};

lengthOfLIS([10, 22, 9, 33, 21, 50, 41, 60, 80]);
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
lengthOfLIS([0, 1, 0, 3, 2, 3]);

lengthOfLIS([1, 2, 3, 4]);
//console.log(helper([1, 2, 3, 4], 2))
