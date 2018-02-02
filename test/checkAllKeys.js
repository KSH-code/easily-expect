/* global describe, it */
'use strict'
const { checkAllKeys } = require('../index')

describe('Test keys in object', () => {
  it('Check Strings in Array', () => {
    checkAllKeys(['a', 'b', 'c'], { a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })
  })
  // Fail
  // it('Check Strings in Array', () => {
  //   checkAllKeys(['a', 'b', 'c'], { b: 2, c: 3 }, { a: 1, b: 2, c: 3 })
  // })
})
