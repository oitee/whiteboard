function titleCase(str) {
  var sentence = "";
  var strArr = [...str];

  for (let i = 0; i < strArr.length; i++) {
    if (i == 0) {
      var firstcodeStr = strArr[i].charCodeAt(0);
      if (firstcodeStr >= 97 && firstcodeStr <= 122) {
        strArr[i] = String.fromCharCode(firstcodeStr - 32);}
        sentence = sentence + strArr[i];
      
    } else if (strArr[i] == " ") {
      var charcodeStr = strArr[i + 1].charCodeAt(0);
      if (charcodeStr >= 97 && charcodeStr <= 122) {
        strArr[i + 1] = String.fromCharCode(charcodeStr - 32);}
        sentence = sentence + strArr[i] + strArr[i + 1];
        i++;
      
    } else {
      if (strArr[i].charCodeAt(0) >= 65 && strArr[i].charCodeAt(0) <= 90) {
        var charcodesmall = strArr[i].charCodeAt(0);
        strArr[i] = String.fromCharCode(charcodesmall + 32);
      }
      sentence = sentence + strArr[i];
    }
  }

  return sentence;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("I'm a little tea pot"));