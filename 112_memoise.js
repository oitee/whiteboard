function oneArg(n) {
  return Math.random();
}
function oneArg2(n) {
  return Math.random() + n;
}
function twoArg(n, m) {
  return n + m + Math.random();
}

let fibonacci = memoize (function (n) {
  //nth fibo no
  if (n == 0 || n == 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
});
function memoize(f) {
  let memo = {};
  return function (...args) {
    let strArgs = args.toString();
    if (memo.hasOwnProperty(strArgs)) {
      return memo[strArgs];
    }
    let temp = f(...args);
    memo[strArgs] = temp;
    return temp;
  };
}
let memoOneArg = memoize(oneArg);
let memoOneArg2 = memoize(oneArg2);
let memoTwo = memoize(twoArg);
let memoFibo = memoize(fibonacci);

console.log(memoFibo(50));

console.log(memoOneArg(1));
console.log(memoOneArg(1));
console.log(memoOneArg(2));
console.log(memoOneArg(2));

console.log(memoOneArg2(1));
console.log(memoOneArg2(1));
console.log(memoOneArg2(2));
console.log(memoOneArg2(2));

console.log(memoTwo(1, 2));
console.log(memoTwo(1, 2));
console.log(memoTwo(2, 4));
console.log(memoTwo(2, 4));
