const tail = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('Pass only arrays');
  }
  return array.slice(1);
};

module.exports = tail;