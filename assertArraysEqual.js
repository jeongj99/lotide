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

//Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, '3'], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);