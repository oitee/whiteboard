//base function = str[n]== undefined, return n-1
//recursive function: f(n)
function digits(num){
    if (num < 10){
        return 1;
    }
    return digits(Math.floor(num/10)) + 1;
} 
console.log(digits (999999));
console.log(digits(101));

