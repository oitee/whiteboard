//https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function (s) {
  if (s.length == 0 || s.length == 1) {
    return s;
  }
  if(isPalindrome(s)){
      return s;
  }
  let longest = s[0];
  for (let i = 0; i < s.length; i++) {
    let restOfS = s.substring(i + 1);
    if (restOfS.indexOf(s[i]) > -1) {
      for (let j = restOfS.length -1; j >=0; j--) {
        if (restOfS[j] == s[i]) {
          let newCandidate = s[i] + restOfS.substring(0, j + 1);
          if (isPalindrome(newCandidate)) {
            if (newCandidate.length > longest.length) {
              longest = newCandidate;
            }
            break;
          }
        }
      }
    }
  }
  function isPalindrome(str) {
    if (str.length == 0 || str.length == 1) {
      return true;
    }
    if (str[0] == str[str.length - 1]) {
      return isPalindrome(str.substring(1, str.length - 1));
    }
    return false;
  }
  return longest;
};

console.log(longestPalindrome("YmamamTbaabXm") == "mamam");
console.log(longestPalindrome("madam") == "madam");
console.log(longestPalindrome("bbbb") == "bbbb");
console.log(longestPalindrome("abcd") == "a");

console.log(longestPalindrome("babad") == "bab");
console.log(longestPalindrome("cbbd") == "bb");
console.log(longestPalindrome("a") == "a");
console.log(longestPalindrome("ac") == "a");

console.log(longestPalindrome("YTbaabmamamXm") == "mamam");
console.log(longestPalindrome("") == "");

//console.log(longestPalindrome("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"));
