const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, valueSearching) {
  for (const [key, value] of Object.entries(object)) {
    if (value === valueSearching) {
      return key;
    }
  }
};

// Test Cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const champions2022 = {
  England: "Manchester City",
  Spain: "Real Madrid",
  France: "Paris Saint Germain",
  Germany: "Bayern Munich"
};

assertEqual(findKeyByValue(champions2022, "Real Madrid"), "Spain");
assertEqual(findKeyByValue(champions2022, "Liverpool"), undefined);