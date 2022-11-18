const Test = require('./index')
const Calculator = require('./calculator.js')
const t = new Test()
const assert = require('assert')

test('toto\'s length expected to equal 4', () => {
    expect(t.stringLength('toto')).toBe(4);
})

test('9876\'s reverse expected to equal 6789', () => {
  expect(t.reverseString('9876')).toBe('6789');
})


test('capitalize string', () => {
  expect(t.capitalize('initilize')).toBe('Initilize');
})


describe('CalculatorUnitTests', ()=>{
  it('add_two_numbers', ()=> {
      assert(Calculator.add(1,8) === 9)
  })
  
  it ('divide_a_by_b', ()=> {
    assert(Calculator.divide(9,3) === 3)
  })
  
  it ('multiply_a_by_b', ()=> {
    assert(Calculator.multiply(9,3) === 27)
  })

  it ('substract_b_from_a', ()=> {
    assert(Calculator.subtract(9,3) === 6)
  })
})

