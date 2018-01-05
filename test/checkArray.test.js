/* global describe, it */
'use strict'
const { checkArray } = require('../index')

describe('Test regular expression', () => {
  it('Check Strings in Array', () => {
    checkArray([/^\d*$/, /[a-z]{1,10}/], ['123', 'a', '123', 'a'], ['123', 'a', '123', 'a'])
  })
  it('Check Objects in Array', () => {
    checkArray([/^\d*$/, /[a-z]{1,10}/, { test1: /^\d*$/ }], ['123', 'a', { test1: '123' }, '123', 'a', { test1: '123' }], ['123', 'a', { test1: '123' }])
  })
  // Fail
  // it('Check Objects in Array', () => {
  //   checkArray([/^\d*$/, /[a-z]{1,10}/, { test1: /^\d*$/ }], ['123', 'a', { test2: '123' }, '123', 'a', { test1: '123' }], ['123', 'a', { test1: '123f' }])
  // })
})
