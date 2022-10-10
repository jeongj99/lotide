const assert = require('chai').assert;
const { expect } = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('Return true if objects match (primitive case)', () => {
    const objectOne = { a: "1", b: "2" };
    const objectTwo = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(objectOne, objectTwo), true);
  });
  it('Return false if objects do not match (primitive case)', () => {
    const objectOne = { a: "1", b: "2" };
    const objectTwo = { a: "1", c: "2" };
    assert.strictEqual(eqObjects(objectOne, objectTwo), false);
  });
  it('Return true if objects match (arrays as values)', () => {
    const objectOne = { c: "1", d: ["2", 3] };
    const objectTwo = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(objectOne, objectTwo), true);
  });
  it('Return false if objects do not match (arrays as values)', () => {
    const objectOne = { c: "1", d: ["2", 3] };
    const objectTwo = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(objectOne, objectTwo), false);
  });
  it('Return true if objects match (nested objects)', () => {
    const objectOne = { a: { z: 1 }, b: 2 };
    const objectTwo = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(objectOne, objectTwo), true);
  });
  it('Return false if objects do not match (nested objects)', () => {
    const objectOne = { a: { y: 0, z: 1 }, b: 2 };
    const objectTwo = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(objectOne, objectTwo), false);
  });
  it('Throw an error if one or both objects are not objects', () => {
    const objectOne = 'hello';
    const objectTwo = [1, 2, 3];
    expect(eqObjects, (objectOne, objectTwo)).to.throw('Pass only objects');
  });
});