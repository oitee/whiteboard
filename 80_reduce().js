function reduce(f, acc, data) {
  for (let i = 0; i < data.length; i++) {
    acc = f(acc, data[i]);
  }
  return acc;
}
//Calling reduce to multiply each element of an array
console.log(reduce((acc, item) => acc * item, 1, [1, 2, 3, 4])); // Output: 24
//Calling reduce to concatenate each element of a string and add "and" between each of the items so concatenated
const concat = function (acc, item) {
  if (acc == undefined) {
    return item;
  }
  return acc + " and " + item;
};
console.log(reduce(concat, undefined, ["apple", "mango", "orange"])); //output:apple and mango and orange
