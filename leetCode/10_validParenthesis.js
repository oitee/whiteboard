//To find if an input string containing only brackets, is ordered correctly
//https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  let arr = [...s];
  let open = 0;
  let close = 0;
  let correctClose = [];
  //checking if the supplied string has an even number of characters
  if (arr.length % 2 != 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    //for every open bracket, pushing the corresponding closed bracket into the array named 'correctClose'
    switch (arr[i]) {
      case "{":
        correctClose.push("}");
        open++;
        break;
      case "(":
        correctClose.push(")");
        open++;
        break;
      case "[":
        correctClose.push("]");
        open++;
        break;
    }
    //for every closed bracket, checking if it matches the last pushed element into 'correctClose'
    switch (arr[i]) {
      case "]":
      case ")":
      case "}":
      close++;  
      if (arr[i] == correctClose[correctClose.length - 1]) {
        correctClose.pop(correctClose.length - 1);
        } else {
          return false;
        }
    }
  }
  if (open == close){
      return true;
  }
  return false;
};

console.log("input: '{()}':" + isValid("{()}"));
console.log("input: '{}()]':" + isValid("{}()]"));
console.log("input: '{()}()':" + isValid("{()}()"));
console.log("input: '{()}]':" + isValid("{()}]"));
console.log("input: '()[]{}':" + isValid("()[]{}"));
console.log("input: '{[]}':" + isValid("{[]}"));

console.log("input: '[':" + isValid("["));
console.log("input: '[)]]':" + isValid("[)]]"));
console.log("input: '[{]}]':" + isValid("[{]}]"));
console.log("input: '(]':" + isValid("(]"));
console.log("input: '([)]':" + isValid("([)]"));
