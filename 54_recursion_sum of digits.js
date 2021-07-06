
function digits(num){
    if (num < 10){
        return num;
    }
    return digits(Math.floor(num/10)) + (num % 10);
} 
console.log(digits (999999));
console.log(digits(101));


