//https://leetcode.com/problems/add-binary/submissions/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let longer, shorter;
  if (a.length > b.length) {
    longer = a;
    shorter = b;
  } else {
    longer = b;
    shorter = a;
  }
  //padding the shorter number, so that we have even size of both of them
  // same size for both the numbers is imp because
  // we need the same units place for both of them (to start the right-to-left iteration)

  while (longer.length > shorter.length) {
    shorter = "0" + shorter;
  }
  let result = "";
  let carry = 0;
  for (let i = longer.length - 1; i >= 0; i--) {
    let sum = parseInt(longer[i]) + parseInt(shorter[i]) + carry;

    switch (sum) {
      case 3:
        result = "1" + result;
        carry = 1;
        break;
      case 2:
        result = "0" + result;
        carry = 1;
        break;
      case 1:
        result = "1" + result;
        carry = 0;
        break;
      case 0:
        result = "0" + result;
        carry = 0;
        break;
    }
  }
  if (carry === 1) {
    result = "1" + result;
  }
  //console.log(result);
  return result;
};


//--------------------Test cases--------------------------

const res1 = addBinary("11", "1");
const res2 = addBinary("1010", "1011");
const res3 = addBinary("0", "0");
const res4 = addBinary("1010", "1011");
const res5 = addBinary(
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
);
const res6 = addBinary("110010", "10111");






console.log(res1 === "100");
console.log(res2 === "10101");
console.log(res3 === "0");
console.log(res4 === "10101");
console.log(
  res5 ===
    "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
);
console.log(res6 === "1001001");
