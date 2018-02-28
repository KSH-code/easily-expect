/* global describe, it */
'use strict'
const { checkLeast } = require('../index')

describe('Test checkLeast', () => {
  it('1. simple test', () => {
    checkLeast(1, 1, 2, 'a'.length, 'ab'.length)
  })
})
