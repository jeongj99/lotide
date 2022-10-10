const eqArrays = function(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    throw new Error('Pass only arrays');
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      const subArray = eqArrays(arrayOne[i], arrayTwo[i]);
      if (!subArray) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;