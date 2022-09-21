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

const middle = function(array) {
  let middle = (array.length - 1) / 2;
  if (middle < 1) {
    return [];
  }
  return array.slice(Math.floor(middle), Math.ceil(middle + 1));
};

// Test Cases (One or two elements)
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Test Cases (Odd number of elements)
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Test Cases (Even number of elements)
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

const array = [1, 2, 3];
middle(array); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(array, [1, 2, 3]);