
function parse(str){
   
        switch(str){
            case "0":
                return 0;
            case "1":
                return 1;
            case "2":
                return 2;
            case "3":
                return 3;
            case "4":
                return 4;
            case "5":
                return 5;
            case "6":
                return 6;
            case "7":
                return 7;
            case "8":
                return 8;
            case "9":
                return 9;

        } 
    return parse(str.substring(0, str.length - 1)) * 10 + parse(str[str.length - 1]);


}
console.log(parse("123") + 1);
