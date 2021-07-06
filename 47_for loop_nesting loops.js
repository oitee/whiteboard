function sumOfProducts (arr){
    var product = 1;
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
        product = 1;
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
        sum+=product;
    }
    return sum;
}
var myarr = [[0, 1], [1, 2],[2, 3], [3, 4]];
var result = sumOfProducts(myarr);
console.log(result);