//write a program to first a) sort the array passed; and then b) find the *lowest* index at which num (passed value) can be inserted in the sorted array
function getIndexToIns(arr, num) {
  let i = 0;
  //sorting the array
  while (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = -1;
    }
    i++;
  }
  console.log(arr); //logging the sorted array!
  //finding the lowest position where num can be inserted

  let result = 0;
  for (let j = 0; j < arr.length; j++){
      if (num > arr[j]){
          result = j + 1;// this is done to ensure that the num is added *after* the largest element that is smaller than num
      }
  }
  return result;
}
console.log(getIndexToIns([40, 60, 50, 1, 3, 44, -1], 50));