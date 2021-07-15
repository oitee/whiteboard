//using reduce or map, write a higher-order function that takes as input a collection and a function, applies the function in every element in the function, if the function for the element returns undefined or false, do not put it into collection. Otherwise, put the return value to the resulting collection.
function reduce(f, acc, data) {
  for (let i = 0; i < data.length; i++) {
    acc = f(acc, data[i]);
  }
  return acc;
}
function keep(f, data) {
  const myFunc = (acc, item) => {
    const result = f(item);
    if (result != undefined && result != false) {
      acc.push(result);
      return acc;
    }
    return acc;
  };
  return reduce(myFunc, [], data);
}
const positive = function (i) {
  if (i > 0) {
    return i + 1;
  }
};
console.log(keep(positive, [-3, 1, 2, -22, 33]));
