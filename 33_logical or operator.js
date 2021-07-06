function testLogicalOr(val){
    if (val < 10 || val > 20){
        
        return ("\n no, " + val + " does not fall between 10 and 20");
    }
    return ("\n yes " + val + " falls between 10 and 20");
}
console.log("does 1 fall between 10 and 20, both inclusive?" + testLogicalOr(1));
console.log("does 10 fall between 10 and 20, both inclusive?" + testLogicalOr(10));
console.log("does 20 fall between 10 and 20, both inclusive?" + testLogicalOr(20));
console.log("does 100 fall betweeen 10 and 20, both inclusive?" + testLogicalOr(100));

