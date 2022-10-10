const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (!(typeof object1 === 'object' && object1 !== null && !Array.isArray(object1)) &&
    !(typeof object2 === 'object' && object2 !== null && !Array.isArray(object2))) {
    throw new Error('Pass only objects');
  }
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  for (const key of keyArray1) {
    if ((typeof object1[key] === 'object' && object1[key] !== null && !Array.isArray(object1[key])) &&
      (typeof object2[key] === 'object' && object2[key] !== null && !Array.isArray(object2[key]))) {
      const subObject = eqObjects(object1[key], object2[key]);
      if (!subObject) {
        return false;
      }
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;