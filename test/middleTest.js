const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

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