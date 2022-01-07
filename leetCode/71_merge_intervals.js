//https://leetcode.com/problems/merge-intervals/

// input = [[start0, end0], [start1, end1]... [startN, endN]]
// First, sort the array as per the start
// Using while, iterate through the array 
// for each element, see if the current end is greater than next start
// if no, carry forward (then increment counter)
// if yes, merge next with current element (delete and replace using splice)

var merge = function(intervals) {
    let i = 0;
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    // console.log("intervals:" + intervals)
    while(i < intervals.length - 1){
        if(intervals[i][1] < intervals[i + 1][0]){
            i++;
        }
        else{
            let temp = [intervals[i][0], Math.max(intervals[i][1], intervals[i + 1][1])];
            intervals[i] = temp;// replace current with start of original current and end of next
            intervals.splice(i + 1, 1);//delete next
            //Not incrementing i, as we need to see if the next-to-next element needs to be merged with the new current
        }
    }
    console.log(intervals);
    return intervals;
};

console.log(`Expected: [[1, 6], [8, 10], [15, 18]]`)
merge([[1,3],[2,6],[8,10],[15,18]])
console.log(`Expected: [[1, 5]]`)
merge([[1,4],[4,5]])
console.log(`Expected: [[1, 999]]`)
merge([[1, 11], [99, 999], [5, 99]])
console.log(`Expected: [[1, 11], [50,55], [88, 99]]`)
merge([[1, 4], [88, 99], [50, 55], [4, 11]]);