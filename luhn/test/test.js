const chai = require('chai');
const expect = chai.expect;

const luhnValidate = require('../luhnValidate');


describe('LuhnValidate', () => {
  it('79927398713 should be valid', () => {
    expect(luhnValidate(79927398713)).to.equal(true);
  });
  it('79927398715 should NOT be valid', () => {
    expect(luhnValidate(79927398715)).to.equal(false);
  });
  it('3453453452 should be valid', () => {
    expect(luhnValidate(3453453452)).to.equal(true);
  });
  it('3453453453 should NOT be valid', () => {
    expect(luhnValidate(3453453453)).to.equal(false);
  });

});