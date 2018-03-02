/* global describe, it */
'use strict'
const { checkWithin } = require('../index')

describe('Test checkWithin', () => {
  it('1. simple test', () => {
    checkWithin(2, 5, 2, 3, 4, 5)
  })
})
