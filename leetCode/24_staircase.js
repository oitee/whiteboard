//Given a target integer, find out how many distinct ways to reach to the target by adding 1 or 2 at each level
//https://leetcode.com/problems/climbing-stairs/
var climbStairs = function (n) {
  let counter = 0;
  function paths(currentData, aggregate) {
    if (currentData + aggregate == n) {
      counter++;
    } else {
      let newAggregate = currentData + aggregate;
      if (newAggregate + 1 <= n) {
        paths(1, newAggregate);
      }
      if (newAggregate + 2 <= n) {
        paths(2, newAggregate);
      }
    }
  }
  paths(2, 0);
  paths(1, 0);
  return counter;

};
console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));