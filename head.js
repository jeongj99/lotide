const head = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('Pass only arrays');
  }
  return array[0];
};

module.exports = head;