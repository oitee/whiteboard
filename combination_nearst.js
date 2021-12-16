class passwordMatcher {
  #start;
  #end;
  #hints;
  constructor() {
    this.#start;
    this.#end;
    this.#hints = [];
  }
  setRange(start, end) {
    this.#start = start;
    this.#end = end;
  }
  setHints(...conditions) {
    const listOfHints = [];
    conditions.forEach((hint) => {
      if (this.#isFunction(hint)) {
        listOfHints.push(hint);
      }
    });
    this.#hints = listOfHints;
  }
  findPasscode() {
    let i = this.#start;
    while (i <= this.#end) {
      
      let found = true;
      for (let hint of this.#hints) {
        if (!hint(i)) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
      i++;
    }
    return null;
  }
  findMultiplePasscodes() {
    const result = [];
    let i = this.#start;
    while (i <= this.#end) {
      
      let found = true;
      for (let hint of this.#hints) {
        if (!hint(i)) {
          found = false;
          break;
        }
      }
      if (found) {
        result.push(i);
      }
      i++;
    }
    return result;
  }
   #isFunction(fn) {
    return typeof fn === "function";
  }
}

function extractDigits(num) {
  let digits = [];
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return digits;
}

const condition1 = (num) => {
  const digits = extractDigits(num);
  return digits[0] * digits[1] === 24;
};

const condition2 = (num) => {
  const digits = extractDigits(num);
  return 3 * digits[3] === digits[1];
};

const condition3 = (num) => {
  const digits = extractDigits(num);
  return digits[0] + digits[2] === digits[3] + digits[4];
};

const condition4 = (num) => {
  const digits = extractDigits(num);
  return digits[0] + digits[1] + digits[2] + digits[3] + digits[4] === 26;
};

const condition5 = (num) => {
  const digits = extractDigits(num);
  function hasDuplicates(arr, givenIndex) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== givenIndex) {
        if (arr[i] === arr[givenIndex]) {
          return true;
        }
      }
    }
    return false;
  }

  for (let i = 0; i < digits.length; i++) {
    if (hasDuplicates(digits, i)) {
      return true;
    }
  }
  return false;
};

const finder = new passwordMatcher();
finder.setRange(10000, 99999);
finder.setHints(condition1, condition2, condition3, condition4, condition5);
console.log(finder.findPasscode());


