const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return empty array if there is one element in the input array", () => {
    const inputArray = [1];
    assert.deepEqual(middle(inputArray), []);
  });
  it("return empty array if there are two elements in the input array", () => {
    const inputArray = [1, 2];
    assert.deepEqual(middle(inputArray), []);
  });
  it("return [3] when input is [1, 2, 3, 4, 5] (array with odd number of elements", () => {
    const inputArray = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(inputArray), [3]);
  });
  it("return [2, 3] when input is [1, 2, 3, 4] (array with even number of elements", () => {
    const inputArray = [1, 2, 3, 4];
    assert.deepEqual(middle(inputArray), [2, 3]);
  });
  it("check that original array is not modified after calling middle", () => {
    const inputArray = [1, 2, 3, 4, 5];
    middle(inputArray);
    assert.deepEqual(inputArray, [1, 2, 3, 4, 5]);
  });
});