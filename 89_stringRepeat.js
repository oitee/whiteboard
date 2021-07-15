function repeatStringNumTimes(str, num) {
    if (num < 1){
      return "";
    }
  resultingStr = "";
  for (num; num > 0; num--){
    resultingStr = resultingStr + str;
  }
    return resultingStr;
  }
  
  console.log(repeatStringNumTimes("*", 3));