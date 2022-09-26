const eqArrays = function(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    throw new Error('Pass only arrays');
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;