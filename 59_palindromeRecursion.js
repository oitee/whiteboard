
function reverse(str1){
   
    var length = str1.length;
    if (length == 1){
            return str1;
        }
    var lastCharacter = str1[length-1];
    var minusLastCharacter = str1.substring(0, (length-1));
    return  lastCharacter + reverse(minusLastCharacter);
}


function palindrome(str){
    var lowerCase = str.toLowerCase();
    if (reverse(lowerCase) == lowerCase){
        return str + " is a palindrome";
    }
    return str + " is not a palindrome";
}

console.log(palindrome("Oitihjya"));
console.log(palindrome("Linux"));
console.log(palindrome("ratar"));
console.log(palindrome("Ratar"));
console.log(palindrome("rataR"));
console.log(reverse("Linux"));
