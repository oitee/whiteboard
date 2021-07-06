function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
return "No";
}
console.log("is 32 less than equal to 50 but greater than equal to 25?" + testLogicalAnd(32));
console.log("is 2 less than equal to 50 but greater than equal to 25?" + testLogicalAnd(2));
