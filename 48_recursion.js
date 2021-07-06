//sum of first n elements of an array using recursion. Here, the call function (within the function) should be (arr, n-1)...till n=0; and the operation should be +arr[n-1]
function sum(arr, n){
    if (n <= 0 ){
        return 0
    }
    else { 
        return sum(arr, (n - 1)) + arr[(n-1)];
    }
} 
var myarr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log (sum(myarr, 5));
