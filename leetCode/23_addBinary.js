//Given two binary strings, return their sum as a binary string
//https://leetcode.com/problems/add-binary/
var addBinary = function (a, b) {
  let carried = "0";
  let i, str1, str2;
  let result = "";
  if (a.length >= b.length) {
    i = a.length - 1;
    str1 = a;
    str2 = b;
  } else {
    i = b.length - 1;
    str1 = b;
    str2 = a;
  }
  while (str2.length != i + 1) {
      str2 = '0' + str2;
  }
  while (i >= 0) {
    if (str1[i] == "1") {
      if ((str2[i] == "0") && carried == "0") {
        result = "1" + result;
        carried = "0";
        i--;
      } else if (
        ((str2[i] == "0") && carried == "1") ||
        (str2[i] == "1" && carried == "0")
      ) {
        result = "0" + result;
        carried = "1";
        i--;
      } else if (str2[i] == "1" && carried == "1") {
        result = "1" + result;
        carried = "1";
        i--;
      }
    } else if (str1[i] == "0") {
      if ((str2[i] == "0") && carried == "0") {
        result = "0" + result;
        carried = "0";
        i--;
      } else if (
        ((str2[i] == "0") && carried == "1") ||
        (str2[i] == "1" && carried == "0")
      ) {
        result = "1" + result;
        carried = "0";
        i--;
      } else if (str2[i] == "1" && carried == "1") {
        result = "0" + result;
        carried = "0";
        i--;
      }
    }
  }
  if (carried == "1") {
    result = "1" + result;
  }
  return result;
};
console.log(addBinary("1000", "1000") == '10000');
console.log(addBinary("1011", "1011") == '10110');
console.log(addBinary("1010", "1011") == '10101');
console.log(addBinary("1", "11") == '100');
console.log(addBinary("11111", "100") == '100011');
console.log(addBinary("110010", "10111"));
