var arr = [];
function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){
        arr.push(endNum);
        //return arr;
    }
    else{
        return rangeOfNumbers(startNum +1, endNum)
        arr.push(startNum);
        /*arr =*/ rangeOfNumbers(startNum + 1, endNum);
        //return arr;
    }
return arr;


  };
  console.log(rangeOfNumbers(10,15));
 
