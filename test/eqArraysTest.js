const assert = require('chai').assert;
const { expect } = require('chai');
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('Return true if both arrays match', () => {
    const arrayOne = [1, 2, 3];
    const arrayTwo = [1, 2, 3];
    assert.strictEqual(eqArrays(arrayOne, arrayTwo), true);
  });
  it('Return false if arrays do notmatch', () => {
    const arrayOne = [1, 2, 3, '4'];
    const arrayTwo = [1, 2, 3];
    assert.strictEqual(eqArrays(arrayOne, arrayTwo), false);
  });
  it('Throw an error if one or both arrays are not arrays', () => {
    const arrayOne = 'hello';
    const arrayTwo = [1, 2, 3];
    expect(eqArrays, (arrayOne, arrayTwo)).to.throw('Pass only arrays');
  });
});