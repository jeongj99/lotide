const assert = require('chai').assert;
const { expect } = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("Return {l: 2, h: 1, a: 1, b: 1} for the input 'lh lab'", () => {
    const string = 'lh lab';
    assert.deepEqual(countLetters(string), {l: 2, h: 1, a: 1, b: 1});
  });
  it("Returns only letters for the input 'lh lab942'", () => {
    const string = 'lh lab942';
    assert.deepEqual(countLetters(string), {l: 2, h: 1, a: 1, b: 1});
  });
  it("Return {l: 2, h: 1, a: 1, b: 1} for the input 'Lh lAb' (it is case insensitive)", () => {
    const string = 'Lh lAb';
    assert.deepEqual(countLetters(string), {l: 2, h: 1, a: 1, b: 1});
  });
  it('throw an error if input is not a string', () => {
    expect(countLetters, undefined).to.throw('Pass only strings');
  });
});
