const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let middle = (array.length - 1) / 2;
  return array.slice(Math.floor(middle), Math.ceil(middle + 1));
};

module.exports = middle;