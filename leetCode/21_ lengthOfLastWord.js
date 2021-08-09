//Given a string, find the length of the last word
//https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  let word;
  let arr = [...s];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != " ") {
      if (word === undefined) {
        word = arr[i];
      } else {
        word = word + arr[i];
      }
    }
    //when arr[i] == " "
    else if (word != undefined) {
      return word.length;
    }
  }
  return word.length;
};

console.log(lengthOfLastWord("Jack Jill Happy") == 5);
console.log(lengthOfLastWord("Jack Jill Happy   ") == 5);
console.log(lengthOfLastWord("Jack Jill H") == 1);
console.log(lengthOfLastWord("   fly me   to   the moon  ") == 4);
console.log(lengthOfLastWord("luffy is still joyboy") == 6);
