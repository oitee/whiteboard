//A function that accepts a string ('targetWord') and an array of strings ('wordBank)
//Return true, if the targetWord can be constructed using the strings in wordBank
//a string from the wordBank can be used as many times as needed

function canConstruct(targetWord, wordBank, inProgress = "", memo = {}) {
    if (inProgress in memo) {
    return memo[inProgress];
  }
  if (inProgress == targetWord) {
    memo[inProgress] = true;
    return true;
  }
  if (!targetWord.startsWith(inProgress)) {
    memo[inProgress] = false;
    return false;
  }

  for (let word of wordBank) {
    let newInProgress = inProgress + word;
    let result = canConstruct(targetWord, wordBank, newInProgress, memo);
    if (result) {
      memo[newInProgress] = true;
      return true;
    }
  }
  memo[inProgress] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeee",
    "eeeeee",
    "eeeeee",
    "eeeeee",
  ])
);
