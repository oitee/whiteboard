
function fibo(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(6) == 8);
console.log(fibo(11));


var memo = {};
function fiboMemo(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    if (memo[n] !== undefined){
        return memo[n];
    }
    
    var result = fiboMemo(n - 1) + fiboMemo(n - 2);
    memo[n] = result;
    return result;
}
console.log(fiboMemo(50));
console.log(memo);