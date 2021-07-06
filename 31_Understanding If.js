function trial(num1, num2){
    if (num1 > num2){
        return (num1);
    }
    return (num2);
}

console.log("between 1 and 2, " + trial(1,2) + "is greater");
console.log("between 2 and 1, " + trial(2,1) + " is greater");

