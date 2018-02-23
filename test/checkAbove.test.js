/* global describe, it */
'use strict'
const { checkAbove } = require('../index')

describe('Test checkAbove', () => {
  it('1. simple test', () => {
    checkAbove(2, 3, 4, 'abc'.length, 'abcd'.length)
  })
})
