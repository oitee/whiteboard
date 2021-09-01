function howSum(targetSum, numbers) {
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }
  for (let i = 0; i < numbers.length; i ++) {
    let newTarget = targetSum - numbers[i];
    let result = howSum(newTarget, numbers);
    if (result !== null) {
      return [...result, numbers[i]];
    }
  }
  return null;
}
console.log(howSum(8, [3, 5, 1, 8]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));

