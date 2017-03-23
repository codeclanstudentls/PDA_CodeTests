var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it should be able to add', function(){
    calculator.numberClick(1);
    calculator.operatorClick('=');
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  });

  it('it should be able to subtract', function(){
    calculator.numberClick(7);
    calculator.operatorClick('=');
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  });

  it('it should be able to multiply', function(){
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.multiply(3);
    assert.equal(15, calculator.runningTotal);
  });

  it('it should be able to divide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('=');
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  });

  it('it should be able to clear total', function(){
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to concatenate multiple button number clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(123, calculator.runningTotal);
  });

  it('it should be able to chain multiple operations', function(){
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.add(7);
    calculator.operatorClick('=');
    calculator.divide(2);
    assert.equal(5, calculator.runningTotal);
  });

  it('it should be able to handle negative numbers', function(){
    calculator.numberClick(-5);
    calculator.operatorClick('=');
    calculator.add(3);
    assert.equal(-2, calculator.runningTotal);
  });

  it('it should be able to handle large numbers', function(){
    calculator.numberClick(250000);
    calculator.operatorClick('=');
    calculator.divide(5);
    assert.equal(50000, calculator.runningTotal);
  });

  it('it should be able to divide by zero', function(){
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.divide(0);
    assert.equal(Infinity, calculator.runningTotal);
  });

});
