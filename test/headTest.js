const assert = require('chai').assert;
const { expect } = require('chai');
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("return 5 for [5, 6, 7", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("returns 'Alex' for ['Alex']", () => {
    assert.strictEqual(head(['Alex']), 'Alex');
  });
  it("return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it('throw an error if input is not an array', () => {
    expect(head, 'string').to.throw('Pass only arrays');
  });
});