function oneArg(n) {
  return n * n;
}

function memoizeOneArg() {
  let memo = {};
  return function (n) {
    let strN = n.toString();
    if (memo.hasOwnProperty(strN)) {
      return memo[strN];
    }
    let temp = oneArg(n);
    memo[strN] = temp;
    return temp;
  };
}
let memoizedOneArg = memoizeOneArg();
console.log(memoizedOneArg(2));
console.log(memoizedOneArg(2));

//proving memoisation with math.random

function oneArgRandom(n) {
  return Math.random() + n;
}
console.log(oneArgRandom(2)); // 2.39243349362445
console.log(oneArgRandom(2)); //2.8532267954230015

function memoizeOneArgRandom() {
  let memo = {};
  return function (n) {
    let strN = n.toString();
    if (memo.hasOwnProperty(strN)) {
      return memo[strN];
    }
    let temp = oneArgRandom(n);
    memo[strN] = temp;
    return temp;
  };
}
let memoizedOneArgRandom = memoizeOneArgRandom();
console.log(memoizedOneArgRandom(2)); //2.2444724212882425
console.log(memoizedOneArgRandom(2)); //2.2444724212882425

// memoisation with a two argument function

function twoArg(n, m) {
  return n * m;
}
function memoizeTwoArg() {
  let memo = {};
  return function (n, m) {
    let strNM = n.toString() + m.toString();
    if (memo.hasOwnProperty(strNM)) {
      return memo[strNM];
    }
    let temp = twoArg(n, m);
    memo[strNM] = temp;
    return temp;
  };
}
let memoizedTwoArg = memoizeTwoArg();
console.log(memoizedTwoArg(2, 3)); //6
console.log(memoizedTwoArg(2, 3)); //6

//memoizing functions with n arguments

function memoize(f) {
  let memo = {};
  let memocounter = {};
  return function (...args) {
    let strArgs = args;
    if (memo.hasOwnProperty(strArgs)) {
      if(memocounter[strArgs] == undefined){
        memocounter[strArgs] = 0;
      }
      else{
        memocounter[strArgs]++;
      }
      return memo[strArgs];
    }
    let temp = f(...args);
    let count = 0;
    for(let i in memocounter){
      if (memocounter[i] > count){
        count = memocounter[i];
      }
    }
    memo[strArgs] = temp;
    return temp;
  };
}

let memoizedMultiply = memoize((n, m) => n * m);
let memoizedAverage = memoize((n, m, o) => (n + m + o) / 2);
console.log(memoizedMultiply(2, 3)); //6
console.log(memoizedAverage(2, 3, 5)); //5

//recursive function

let memoizedFibo = memoize(function (n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return memoizedFibo(n - 1) + memoizedFibo(n - 2);
});
console.log(memoizedFibo(50));//output: 12586269025 [generated in 1.109 seconds]
