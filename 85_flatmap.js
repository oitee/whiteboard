//flatmap(f, data); f(item) = array of things; flatmap() = concatenated arrays from all f(items)
function map(myFunc, arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = myFunc(arr[i]);
  }
  return arr;
}
function reduce(f, acc, data) {
  for (let i = 0; i < data.length; i++) {
    acc = f(acc, data[i]);
  }
  return acc;
}
function flatmap(f, data) {
  const reducingFunction = (acc, item) => {
    return acc.concat(f(item));
  };
  return reduce(reducingFunction, [], data);
}
const evenFlatMap = function (i) {
  if (i % 2 != 0) {
    return [i];
  }
  return [];
};
//write flatmap2 using map
function flatmap2(f, data) {
  let resultMap = map(f, data);
  reducingFunction = function (acc, item) {
    return acc.concat(item);
  };
  return reduce(reducingFunction, [], resultMap);
}

console.log(flatmap((i) => [i, i], [1, 2, 3, 4])); // [1,1,2,2,3,3,4,4]
console.log(map((i) => [i, i], [1, 2, 3, 4])); // [[1,1], [2,2], [3,3], [4,4]]
console.log(flatmap(evenFlatMap, [1, 2, 3, 4])); //[1, 3]
console.log(map(evenFlatMap, [1, 2, 3, 4])); //[[1],[],[3],[]]
console.log(flatmap2((i) => [i, i], [1, 2, 3, 4]));
