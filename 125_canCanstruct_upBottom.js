function canConstruct(targetWord, wordBank, memo = {}) {
  if (targetWord in memo) {
    return memo[targetWord];
  }
  if (targetWord == "") {
    memo[targetWord] = true;
    return true;
  }

  for (let word of wordBank) {
    let result;
    let index = targetWord.indexOf(word);
    if (index == 0) {
      let newTarget = targetWord.substring(word.length);
      result = canConstruct(newTarget, wordBank, memo);
      if (result) {
        memo[newTarget] = true;
        return true;
      }
    }
  }
  memo[targetWord] = false;
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

//succcessful access: 339
//prop: 47
