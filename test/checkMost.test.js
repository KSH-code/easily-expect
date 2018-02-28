/* global describe, it */
'use strict'
const { checkMost } = require('../index')

describe('Test checkMost', () => {
  it('1. simple test', () => {
    checkMost(5, 5, 4, 'abcde'.length, 'abcd'.length)
  })
})
