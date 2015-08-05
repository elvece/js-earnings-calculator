var code = require('../js/utility.js');

describe('calculateTip', function() {
  it('calculates tips, takes total amount and tip percent', function() {
    expect(code.calculateTip(100, 20)).toEqual(20);
  });
});


describe('calculateTax', function() {
  it('calculates tax, takes total amount and tax rate', function() {
    expect(code.calculateTax(100, 20)).toEqual(20);
  });
});

describe('calculateSubtotal', function() {
  it('calculates the total amoutn plus tax, takes total amount and tax rate', function() {
    expect(code.calculateSubtotal(100, 20)).toEqual(120);
  });
});

describe('calculateTotal', function() {
  it('calculates grand total with tip and tax', function() {
    expect(code.calculateTotal(100, 8, 20)).toEqual(128);
  });
});

describe('totalTips', function() {
  it('calculates the total amount of all tips given an array of objects', function() {
    var arr = [{tip:1},{tip:2},{tip:3}];
    expect(code.totalTips(arr)).toEqual(6);
  });
});

describe('avgTip', function() {
  var arr = [{tip:1},{tip:2},{tip:3}];
  it('calculates the average tip given an array of objects', function() {
    expect(code.avgTip(arr)).toEqual(2);
  });
});
