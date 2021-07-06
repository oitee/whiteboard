function testsize(num){
    if (num < 5){
        return "Tiny";
    }
    else if (num < 10){
        return "Small";
    }
    else if (num < 15){
        return "Medium";
    }
    else if (num < 20){
        return "Large";
    }
    else{
        return "Huge";
    }
}
console.log(0 + " is " + testsize(0));
console.log(5 + " is " + testsize(5));
console.log(9 + " is " + testsize(9));
console.log(11 + " is " + testsize(11));
console.log(14 + " is " + testsize(14));
console.log(16 + " is " + testsize(16));
console.log(19 + " is " + testsize(19));
console.log(20 + " is " + testsize(20));
console.log(30 + " is " + testsize(30));