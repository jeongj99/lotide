const middle = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('Pass only arrays');
  }
  if (array.length <= 2) {
    return [];
  }
  let middle = (array.length - 1) / 2;
  return array.slice(Math.floor(middle), Math.ceil(middle + 1));
};

module.exports = middle;