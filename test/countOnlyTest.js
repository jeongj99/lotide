const assert = require('chai').assert;
const { expect } = require('chai');
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('Return an object with the elements of allItems array as keys and count as their value based on itemsToCount', () => {
    const allItems = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(countOnly(allItems, itemsToCount), { 'Fang': 2, 'Jason': 1 });
  });
  it('Return an empty object if allItems array is empty', () => {
    const allItems = [];
    const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(countOnly(allItems, itemsToCount), {});
  });
  it('Return an empty object if all the values of the keys in itemsToCount are false', () => {
    const allItems = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const itemsToCount = { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": false };
    assert.deepEqual(countOnly(allItems, itemsToCount), {});
  });
  it('Return an empty object if itemsToCount is empty', () => {
    const allItems = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const itemsToCount = {};
    assert.deepEqual(countOnly(allItems, itemsToCount), {});
  });
  it("Throw an error if allItems is not an array", () => {
    const allItems = 'hello';
    const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    expect(countOnly, (allItems, itemsToCount)).to.throw('Invalid inputs');
  });
  it("Throw an error if itemsToCount is not an object", () => {
    const allItems = ['hello', 'lighthouse', 'lab'];
    const itemsToCount = ["Jason", "Karima", "Fang", "Agouhanna"];
    expect(countOnly, (allItems, itemsToCount)).to.throw('Invalid inputs');
  });
});