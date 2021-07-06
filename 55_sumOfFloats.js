function sumOfFloats(str){
    if (str.length == 1){
        if(str == "."){
            return 0;
        }
        return parseInt(str);
    }
   
   
    var stringMinusFirstChar = str.substring(1);
    var firstChar = str[0];


    return sumOfFloats(stringMinusFirstChar) + sumOfFloats(firstChar);

}
console.log(sumOfFloats(".1234"));
console.log(sumOfFloats("12.340"));
console.log(sumOfFloats("123.4"));
console.log(sumOfFloats("1234"));
