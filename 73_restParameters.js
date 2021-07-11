const myFunc = (...params) => {
    var sum = 0;
    for (i = 0; i < params.length; i++){
        sum = sum + params[i];
    }
    return sum;
}
console.log(myFunc(1, 2));
console.log(myFunc(1, 2, 3, 4, 5));