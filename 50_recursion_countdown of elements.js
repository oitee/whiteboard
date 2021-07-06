
function countdown(n){
if (n < 1){
    return [];
}
else{
    var arr = countdown(n-1);
    arr.unshift(n);// side effect function
    return arr;
}

}
console.log(countdown(7));