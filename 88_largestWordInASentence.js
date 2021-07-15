function findLongestWordLength(str) {
  let currentWord = "";
  let largestWordLength = 0;
  let strArray = [...str];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] == " ") {
      if (currentWord.length >= largestWordLength) {
        largestWordLength = currentWord.length;
      }
      currentWord = "";
    } else {
      currentWord = currentWord + strArray[i];
    }
  }
  if (currentWord.length > largestWordLength) {
    return currentWord.length;
  }
  return largestWordLength;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
