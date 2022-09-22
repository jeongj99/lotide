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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}

// Test Case #1
const words = ["ground", "control", "to", "major", "tom"];
const firstLetter = map(words, word => word[0]);
console.log(firstLetter);
assertArraysEqual(firstLetter, ['g', 'c', 't', 'm', 't']);

// Test Case #2
const numbers = [1, 2, 3, 4, 5];
const timesTwo = map(numbers, number => number * 2);
console.log(timesTwo);
assertArraysEqual(timesTwo, [2, 4, 6, 8, 10]);

// Test Case #3
const names = ['Alex', 'David', 'Kevin', 'Nicolas', 'Miguel'];
const nameLength = map(names, name => name.length);
console.log(nameLength);
assertArraysEqual(nameLength, [4, 5, 5, 7, 6]);