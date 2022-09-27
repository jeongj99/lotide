const countLetters = function(string) {
  if (typeof string !== 'string') {
    throw Error('Pass only strings');
  }
  const results = {};
  let onlyLetters = (/[a-z]/);
  for (let letter of string.toLowerCase()) {
    if (letter !== ' ' && onlyLetters.test(letter)) {
      if (!results[letter]) {
        results[letter] = 0;
      }
      results[letter]++;
    }
  }
  return results;
};

module.exports = countLetters;