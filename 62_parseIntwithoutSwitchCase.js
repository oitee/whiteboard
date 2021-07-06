function parse(str){
   if(str.length == 1){
       return str.charCodeAt(0) - "0".charCodeAt(0);
   }
    return parse(str.substring(0, str.length - 1)) * 10 + parse(str[str.length - 1]);
}
console.log(parse("123") + 1);
