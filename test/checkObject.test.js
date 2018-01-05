/* global describe, it */
'use strict'
const { checkObject, init } = require('../index')

describe('Test regular expression', () => {
  init({
    test1: {
      test2: /^\d*$/
    },
    test3: /^[a-z]{1,10}$/,
    test4: [/^[a-z]{1,10}$/, /^\d*$/, {
      test5: /^\d*$/
    }]
  })
  it('Check Object in Object', () => {
    checkObject({ test1: { test2: '123123123' } })
  })
  it('Check String in Object', () => {
    checkObject({ test3: 'abcd' })
  })
  it('Check String in Object in Array', () => {
    checkObject({ test4: ['aaa', '123', { test5: '123' }, 'aaa', '123', { test5: '123' }] })
  })
  // Fail
  // it('Check String in Object in Array', () => {
  //   checkObject({ test4: ['aaa', '123', { test5: '123' }, 'aaa', 'as'] })
  // })
  // Fail
  // it('Check String in Object in Array', () => {
  //   checkObject({ test4: ['aaa', '123', { test5: '123', test6: '12433' }, 'aaa', '123', { test5: '123' }] })
  // })
  // Fail
  // it('Check String in Object', () => {
  //   checkObject({ test4: 'abcd' })
  // })
})
