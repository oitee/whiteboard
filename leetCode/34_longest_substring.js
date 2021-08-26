//https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
  let dictionary = {};
  let currentSubstring = "";
  let longestSubstringLength = 0;
  for (let i = 0; i < s.length; i++) {
    //console.log(`when present character is: ${s[i]} current substring is ${currentSubstring} and dictionary is`);
    //console.log(dictionary);
    if (!dictionary.hasOwnProperty(s[i])) {
      //console.log(`dictionary does not contain present character`);

      currentSubstring = currentSubstring + s[i];
      //console.log(`new substring is: ${currentSubstring}`);
      //console.log();
      dictionary[s[i]] = null;
    } else {
      //console.log(`repeated letter`);
      if (currentSubstring.length > longestSubstringLength) {
        longestSubstringLength = currentSubstring.length;
      }
      let newSubstring = "";
      let j = currentSubstring.length - 1;
      while (j >= 0) {
        if(currentSubstring[j] == s[i]){
            break;
        }
        newSubstring = currentSubstring[j] + newSubstring;
        j--;
      }
      //console.log(`After checking, newSubstring is: ${newSubstring}, j: ${j}`)
      j--;
      if(j >= 0){
          while(j >= 0){
            delete dictionary[currentSubstring[j]];
            j--;
          }
      }
      //console.log(`dictionary after deletion:`);
      //console.log(dictionary);
      
      currentSubstring = newSubstring;
      currentSubstring = currentSubstring + s[i];
      //console.log(`new substring: ${currentSubstring}`);
      //console.log();
    }
  }
  if (currentSubstring.length > longestSubstringLength) {
    longestSubstringLength = currentSubstring.length;
  }

  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring("jackjack") === 4);
console.log(lengthOfLongestSubstring("jackack") === 4);
console.log(lengthOfLongestSubstring("jackJACK") === 8);
console.log(lengthOfLongestSubstring("aajackjack") === 4);
console.log(lengthOfLongestSubstring("abcabcbb") === 3);
console.log(lengthOfLongestSubstring("bbbbb") === 1);
console.log(lengthOfLongestSubstring("pwwkew") == 3);
console.log(lengthOfLongestSubstring("") === 0);
console.log(lengthOfLongestSubstring("aab") === 2);
console.log(lengthOfLongestSubstring("dvdf") === 3);
console.log(lengthOfLongestSubstring("tmmzuxt") === 5);


