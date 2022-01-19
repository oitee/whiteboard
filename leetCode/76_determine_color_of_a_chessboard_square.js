//https://leetcode.com/contest/biweekly-contest-49/problems/determine-color-of-a-chessboard-square/

var squareIsWhite = function(coordinates) {
    let isOddBlack = new Set();
    isOddBlack.add("a");
    isOddBlack.add("c");
    isOddBlack.add("e");
    isOddBlack.add("g")

    const isOdd = (parseInt(coordinates[1]) % 2) === 1;

    if(isOddBlack.has(coordinates[0])){
        if(isOdd){
            return false;
        }
        return true
    }
    if(isOdd){
        return true
    }
    return false;
};

console.log("a1")
console.log(squareIsWhite("a1"))

console.log("c1")
console.log(squareIsWhite("c1"))

console.log("c2")
console.log(squareIsWhite("c2"))

console.log("b2")
console.log(squareIsWhite("b2"))