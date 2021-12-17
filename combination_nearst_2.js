//======================================================================================
// List of each condition
//======================================================================================

/**
 * Given a list of digits, returns true
 * if the first and second digits equal to 24
 * @param {Array} digits
 * @returns Boolean
 */
const condition1 = (digits) => digits[0] * digits[1] === 24;

/**
 * Given a list of digits, returns true
 * if the fourth digit is one-third of the second digit
 * @param {Array} digits
 * @returns Boolean
 */
const condition2 = (digits) => 3 * digits[3] === digits[1];

/**
 * Given a list of digits, returns true
 * if the sum of the first and third digits
 * is same as the sum of the fourth and fifth digits
 * @param {Array} digits
 * @returns Boolean
 */
const condition3 = (digits) => digits[0] + digits[2] === digits[3] + digits[4];

/**
 * Given a list of digits, returns true
 * if the sum of all digits equal to 26
 * @param {Array} digits
 * @returns Boolean
 */
const condition4 = (digits) =>
  digits[0] + digits[1] + digits[2] + digits[3] + digits[4] === 26;

/**
 * Given a list of digits, returns true
 * if there is at least one pair of duplicating digits
 * @param {Array} digits
 * @returns Boolean
 */
const condition5 = (digits) => {
  const seenDigits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < digits.length; i++) {
    const currentDigit = digits[i];
    if (seenDigits[currentDigit] > 0) {
      return true;
    }
    seenDigits[i]++;
  }
  return false;
};

//======================================================================================
// Condition Builder
//======================================================================================

/**
 * Returns one function, by combining a given
 * list of conditions (functions)
 * @param  {...functions} conditions
 * @returns function
 */
function conditionBuilder(...conditions) {
  return (digits) => conditions.every((condition) => condition(digits));
}

//======================================================================================
// Passcode finder
//======================================================================================

/**
 * Given a number, returns a list of its digits
 * @param {Number} num
 * @returns Array
 */
function extractDigits(num) {
  let digits = [];
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return digits;
}

/**
 * Given a condition and a range,
 * returns number(s) within that range that satisfy the condition.
 *
 * If the parameter stopAtFirst is false,
 * the function will list an array of numbers
 * that satisfy the condition.
 *
 * If the parameter stopAtFirst is true,
 * the function will return the first number within the range,
 * that satisfies the condition
 * @param {Number} start
 * @param {Number} end
 * @param {Function} condition
 * @param {Boolean} stopAtFirst
 * @returns {Number | Array | null}
 */
function findPasscode(start, end, condition, stopAtFirst = true) {
  const results = [];

  for (let i = start; i <= end; i++) {
    const digits = extractDigits(i);
    if (condition(digits)) {
      if (stopAtFirst) {
        return i;
      } else {
        results.push(i);
      }
    }
  }
  if (results.length > 0) {
    return results;
  }
  return null;
}

const combinedCondition = conditionBuilder(
  condition1,
  condition2,
  condition3,
  condition4,
  condition5
);
console.log(findPasscode(10000, 99999, combinedCondition, true));
