/* global describe, it */
'use strict'
const { checkValue } = require('../index')

describe('Check value is true', () => {
  it('Test String type', () => {
    checkValue('a', 'b', `c`)
  })
  it('Test Number type', () => {
    checkValue(1, -1, 0.1)
  })
  it('Test Boolean type', () => {
    checkValue(true)
  })
  it('Test Object type', () => {
    checkValue({ a: 1 }, { b: true }, {})
  })
})
