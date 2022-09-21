const eqArrays = function(arrayOne, arrayTwo) {
  let status = true;
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      status = false;
    }
  }
  return status;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let lowerCased = sentence.toLowerCase();
  let onlyLetters = (/[a-z]/);
  for (let i = 0; i < lowerCased.length; i++) {
    if (lowerCased[i] !== ' ' && onlyLetters.test(lowerCased[i])) {
      if (!results[lowerCased[i]]) {
        results[lowerCased[i]] = [];
      }
      results[lowerCased[i]].push(i);
    }
  }
  return results;
};

// Test Case
const test = letterPositions('hello');
console.log(test);
assertArraysEqual(test.h, [0]);
assertArraysEqual(test.e, [1]);
assertArraysEqual(test.l, [2, 3]);
assertArraysEqual(test.o, [4]);