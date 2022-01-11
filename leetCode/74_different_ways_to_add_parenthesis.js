//https://leetcode.com/problems/different-ways-to-add-parentheses/
var diffWaysToCompute = function (expression) {
    
    return helper(expression);
  

    function helper(helperExpression, memo = new Map()) {
    let exp = [...helperExpression];
    //console.log({helperExpression})
    let finalResult = [];
    if(memo.has(helperExpression)){
        return memo.get(helperExpression);
    }
    for (let i = 0; i < exp.length; i++) {
      let currentChar = exp[i];
      //console.log({currentChar})
     
      if (currentChar === "*" || currentChar === "-" || currentChar === "+") {
        let part1 = helperExpression.substring(0, i);
        let part2 = helperExpression.substring(i + 1);

        let resultOfPart1 = helper(part1, memo);
        let resultOfPart2 = helper(part2, memo);
        
        for (let partOneElement of resultOfPart1) {
          for (let partTwoElement of resultOfPart2) {
            switch (currentChar) {
              case "*":
                finalResult.push(partOneElement * partTwoElement);
                break;
              case "+":
                finalResult.push(partOneElement + partTwoElement);
                break;
              case "-":
                finalResult.push(partOneElement - partTwoElement);
                break;
            }
          }
        }
        
      }
      
    }
    if(finalResult.length === 0){
        return [parseInt(helperExpression)];
    }
    memo.set(finalResult);
    return finalResult;
  }
};

console.log("input: 2*3-4*5")
console.log("Expected: [-34,-14,-10,-10,10]")
console.log(diffWaysToCompute("2*3-4*5"))



