function strAlternateVersion(str){
    if (str.length == 1){
        if (str == "."){
            return 0;
        }
        return parseInt(str);
    }
        console.log ("\t \n the string is " + str);
        var strWithoutLastDigit = str.substring(0, (str.length - 1));
        console.log("string without last digit: " + strWithoutLastDigit);
        var strLastDigit =  str[str.length-1];
        console.log("last digit of String is " + strLastDigit);
        return strAlternateVersion(strWithoutLastDigit) + strAlternateVersion(strLastDigit);
    }
  
    console.log(strAlternateVersion(".1234"));
    console.log(strAlternateVersion("1.234"));
    /*console.log(strAlternateVersion("12.34"));
    console.log(strAlternateVersion("1234.00"));*/

