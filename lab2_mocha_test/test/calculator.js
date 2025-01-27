const { expect } = require('chai');
const { add, sub, mul, div } = require('../calculator');

describe('Calculator Tests', () => {
  // Addition Tests
  it('add(5, 2) => 7 (PASS)', () => { expect(add(5, 2)).to.equal(7); });
  it('add(5, 2) => 8 (FAIL)', () => { expect(add(5, 2)).to.equal(8); });

  // Subtraction Tests
  it('sub(5, 2) => 3 (PASS)', () => { expect(sub(5, 2)).to.equal(3); });
  it('sub(5, 2) => 5 (FAIL)', () => { expect(sub(5, 2)).to.equal(5); });

  // Multiplication Tests
  it('mul(5, 2) => 10 (PASS)', () => { expect(mul(5, 2)).to.equal(10); });
  it('mul(5, 2) => 12 (FAIL)', () => { expect(mul(5, 2)).to.equal(12); });

  // Division Tests
  it('div(10, 2) => 5 (PASS)', () => { expect(div(10, 2)).to.equal(5); });
  it('div(10, 2) => 2 (FAIL)', () => { expect(div(10, 2)).to.equal(2); });
});