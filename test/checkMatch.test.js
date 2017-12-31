/* global describe, it */
'use strict'
const { checkMatch } = require('../index')

describe('Test regular expression', () => {
  it('Check number string', () => {
    checkMatch(/^[\d]*$/, '1', '123', `99999`)
  })
  it('Check alphabet string', () => {
    checkMatch(/^[A-Za-z]*$/, 'a', 'abc', `azz`)
  })
  it('Check Korean string', () => {
    checkMatch(/^[ㄱ-ㅎ]*$/, 'ㄱ', 'ㅁㄴㅇ', `ㅍㅋㅌㅊㅍ`)
  })
})
