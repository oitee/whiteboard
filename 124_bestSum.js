//bestSum accepts two parameters: an integer (targetSum) and an array of integers (numbers)
//find out the shortest combination of integers in numbers that will add up to the target
//return null, if the elements of numbers do not add upto to targetSum
//return any combination with the shortest length, if there are more than one winning combination 

function bestSum(targetSum, numbers, memo= {}){
    if(targetSum in memo){
        return memo[targetSum];
    }
    if(targetSum < 0){
        return null;
    }
    if(targetSum === 0){
        return [];
    }
    let shortest = null;
    for (let num of numbers){
        let remainder = targetSum - num;
        let current = bestSum(remainder, numbers, memo);
        if(current !== null){
            current = [...current, num];
            if(shortest == null || current.length < shortest.length){
                shortest = current;
            }
        }
    }
    memo[targetSum] = shortest;
    return memo[targetSum]; 
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 11, 25]));