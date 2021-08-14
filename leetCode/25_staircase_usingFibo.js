var climbStairs = function (n) {
  if (n == 1) {
    return n;
  }
  if (n == 2) {
    return n;
  }
  let paths = [];
  paths[0] = 0;
  paths[1] = 1;
  paths[2] = 2;
  for (let i = 3; i <= n; i++) {
    paths[i] = paths[i - 1] + paths[i - 2];
  }
  return paths[n];
};
console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
