/* global describe, it */
'use strict'
const { checkEmpty } = require('../index')

describe('Check empty value', () => {
  it('1. simple test', () => {
    checkEmpty('', [], {}, new Set(), new Map())
  })
})
