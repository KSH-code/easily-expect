/* global describe, it */
'use strict'
const { checkEqual } = require('../index')

describe('Test Equal', () => {
  it('String Type Test', () => {
    checkEqual('a', 'a', `a`/* , 'b' */)
  })
  it('Number Type Test', () => {
    checkEqual(1, 1/* , 2 */)
  })
  it('Object Type Test', () => {
    checkEqual({}, {}/* , { a: 1 } */)
  })
  it('Object Type Test', () => {
    checkEqual({ a: 1 }, { a: 1 }/* , { a: 1 } */)
  })
  it('null Type Test', () => {
    checkEqual(null, null/* , NaN */)
  })
})
