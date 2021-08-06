//find ths first occurence of the string needle in the input string haystack;
// return -1 if no occurence
// return 0 if needle is empty string.

var strStr = function (haystack, needle) {
  if (needle == "") {
    return 0;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j;
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] != needle[j]) {
        break;
      }
    }
    if (j == needle.length) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("indexOf", "X"));
