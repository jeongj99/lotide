const assert = require('chai').assert;
const { expect } = require('chai');
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const array = ['Hello', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(array), ['Lighthouse', 'Labs']);
  });
  it("returns [] for []", () => {
    const array = [];
    assert.deepEqual(tail(array), []);
  });
  it("check that original array is not modified after calling tail", () => {
    const array = ['Hello', 'Lighthouse', 'Labs'];
    tail(array);
    assert.deepEqual(array, ['Hello', 'Lighthouse', 'Labs']);
  });
  it('throw an error if input is not an array', () => {
    expect(tail, 'string').to.throw('Pass only arrays');
  });
});