function UsingReplace(str){
    str = str.replace(".", "");
    if (str.length == 1){
        return parseInt(str[0]);
    }
    var strWithoutFirstDigit = str.substring(1);
    var strFirstDigit = str[0];
    return UsingReplace(strWithoutFirstDigit) + parseInt(strFirstDigit);
    }
    
    console.log(UsingReplace("1234"));
    console.log(UsingReplace(".1234"));
    console.log(UsingReplace("12.34"));