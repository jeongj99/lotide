const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
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
}

// Test Cases
const test = countLetters("Lh lab9");
console.log(test);
assertEqual(test.l, 2);
assertEqual(test.h, 1);
assertEqual(test.a, 1);
assertEqual(test.b, 1);
assertEqual(test.c, undefined);
assertEqual(test["9"], undefined);