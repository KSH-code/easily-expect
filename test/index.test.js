'use strict'
const { checkType } = require('../index')

describe('Test Data Type', () => {
  it('String Type Test', () => {
    checkType('string', 'a', "b", `c`)
  })
  it('Number Type Test', () => {
    checkType('number', 1, 0.0, 3.0)
  })
  it('Object Type Test', () => {
    checkType('object', {})
  })
  it('null Type Test', () => {
    checkType('null', null)
  })
  it('NaN Type Test', () => {
    checkType('NaN', NaN)
  })
  it('Array Type Test', () => {
    checkType('array', [])
  })
})