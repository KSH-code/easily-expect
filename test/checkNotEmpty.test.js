/* global describe, it */
'use strict'
const { checkNotEmpty } = require('../index')

describe('Check not empty value', () => {
  it('1. simple test', () => {
    checkNotEmpty('a', [1], { a: 1 }, new Set([1, 2]), new Map([['a', 1]]))
  })
})
