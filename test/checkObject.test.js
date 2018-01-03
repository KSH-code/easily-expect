/* global describe, it */
'use strict'
const { checkObject, init } = require('../index')

describe('Test regular expression', () => {
  init({
    test1: {
      test2: /^\d*$/
    },
    test3: /^[a-z]{1,10}$/
  })
  it('Check Object in Object', () => {
    checkObject({ test1: { test2: '123123123' } })
  })
  it('Check String in Object', () => {
    checkObject({ test3: 'abcd' })
  })
  // Fail
  // it('Check String in Object', () => {
  //   checkObject({ test4: 'abcd' })
  // })
})
