// arr = [];
// let i;
// let nextChild = 0;
// let counter = 0;
// let LongDistance = rows;
// let shorter = 0;
// let queue = str[0];
// let finalArr = [];

// var convert = function (s, numRows) {
//   let finalStr = "";
//   let origin = 0; //to be incremented by 1
//   let longDistance = numRows + (numRows - 2);
//   let shortDistance = longDistance; // short = longD - shortD; shortD to decrease by 2
//   let currentStr = "";

//   while (origin < numRows) {
//     let counter = origin;
//     let short = longDistance - shortDistance;
//     let shortTurn = true;
//     while (counter < s.length) {
//       currentStr = currentStr + s[counter];
//       if (short == 0 || shortDistance == 0) {
//           counter = counter + longDistance;
//       } else if (shortTurn) {
//         counter = counter + short;
//         shortTurn = false;
//       } else {
//         counter = counter + longDistance;
//         shortTurn = true;
//       }
//     }
//     finalStr = finalStr + currentStr;
//     shortDistance = shortDistance - 2;
//     origin++;
//   }
//   return finalStr;
// };

// while(counter <= rows){
// queued = queue.unshift();
// //see if you have any child
// if(shorter == 0){
//     aptDistance = LongDistance;
// }
// else{
//     aptDistance = LongDistance - shorter;
// }
// let shortKidsTurn = true;
// while(aptDistance < str.length){
//     if(shortKidsTurn){
//         queued.push(str[aptDistance]);
//         shortKidsTurn = false;

//     if(shortDistance != 0){
//         aptDistance = LongDistance;
//     }
// }else{
//     queued.push(str[aptDistance]);
//     aptDistance = shortDistance;
//     shortKidsTurn = true;
// }

// }
// counter++;
// finalArr.push(queued);
// queue = str[counter];

// }

var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let short = 0; //shortD = longD - short; short + 2;
  let longDistance = numRows + (numRows - 2);
  let currentRowIndex = 0;
  let allRows = "";
  while (currentRowIndex < numRows) {
    let shortDistance = longDistance - short;
    let currentRow = rowBuilder(
      s,
      currentRowIndex,
      longDistance,
      shortDistance
    );
    allRows = allRows + currentRow;
    currentRowIndex++;
    short = short + 2;
  }
  return allRows;
};
function rowBuilder(str, origin, long, short) {
  if (origin >= str.length) {
    return "";
  }
  let longKid = "";
  let shortKid = "";
  if (short !== 0 && short !== long) {
    if (origin + short < str.length) {
      shortKid = str[origin + short];
    }
  }
  longKid = rowBuilder(str, origin + long, long, short);

  return str[origin] + shortKid + longKid;
}

console.log(convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI");
console.log(convert("saltlakecity!", 4) == "sk!aaeyllctti");
console.log(convert("A", 1) == "A");
console.log(convert("ABC", 3) == "ABC");
