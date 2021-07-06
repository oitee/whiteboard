function palindrome(str){
    var reverse = "";
    strLowerCase = str.toLowerCase();
    for(var i = strLowerCase.length - 1; i >= 0; i--){
        reverse += strLowerCase[i];
    }
    if (reverse == strLowerCase){
        return str + " is a palindrome";
    }
    return str + " is not a palindrome";
}

console.log(palindrome("linux"))
console.log(palindrome("oitihjya"));
console.log(palindrome("ratar"));
console.log(palindrome("Ratar"));
console.log(palindrome("rataR"));
console.log(palindrome("1234554321"));