/* global describe, it */
'use strict'
const { checkBelow } = require('../index')

describe('Test checkBelow', () => {
  it('1. simple test', () => {
    checkBelow(5, 4, 3, 'abcd'.length, 'abc'.length)
  })
})
