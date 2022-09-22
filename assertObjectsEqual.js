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

const eqObjects = function(object1, object2) {
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  for (let key of keyArray1) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key]) &&
          Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${inspect(expected)}`);
  }
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertObjectsEqual(ab, ba);