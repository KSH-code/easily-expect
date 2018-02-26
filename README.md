[![Build Status](https://travis-ci.org/KSH-code/easily-expect.svg?branch=master)](https://travis-ci.org/KSH-code/easily-expect)
![Npm Version](https://img.shields.io/npm/v/easily-expect.svg?style=flat-square)
# HOW TO USE ?
```
npm install --save easily-expect
```
```
const { checkType, checkMatch, checkEqual, checkObject, init, checkValue } = require('easily-expect')

describe (...)
    init({
        test1: {
            test2: /^\d*$/
        },
            test3: /^[a-z]{1,10}$/,
            test4: [/^[a-z]{1,10}$/, /^\d*$/, {
                test5: /^\d*$/
        }]
    })
    it (...)
        checkType('string', '123', '0')
    it (...)
        checkMatch(/\d/, '1', '123', '1234')
    it (...)
        checkEqual('abc', 'abc', 'aaa') // aaa is false
    it (...)
        checkObject({ test1: { test2: '123123123' } })
    it(...)
        checkObject({ test4: ['aaa', '123', { test5: '123' }, 'aaa', '123', { test5: '123' }] })
    it(...)
        checkArray([/^\d*$/, /[a-z]{1,10}/, { test1: /^\d*$/ }], ['123', 'a', { test1: '123' }, '123','a', { test1: '123' }], ['123', 'a', { test1: '123' }])
    it('Test Object type', () => {
        checkValue({ a: 1 }, { b: true }, {})
    })
    it('Check Strings in Array', () => {
        checkArray([/^\d*$/, /[a-z]{1,10}/], ['123', 'a', '123', 'a'], ['123', 'a', '123', 'a'])
    })
    it('1. simple test', () => {
        checkAbove(2, 3, 4, 'abc'.length, 'abcd'.length)
    })

```
## Example
* [checkType](https://github.com/KSH-code/easily-expect/blob/master/test/checkType.test.js)
* [checkMatch](https://github.com/KSH-code/easily-expect/blob/master/test/checkMatch.test.js)
* [checkEqual](https://github.com/KSH-code/easily-expect/blob/master/test/checkEqual.test.js)
* [checkObject](https://github.com/KSH-code/easily-expect/blob/master/test/checkObject.test.js)
* [checkArray](https://github.com/KSH-code/easily-expect/blob/master/test/checkArray.test.js)
* [checkValue](https://github.com/KSH-code/easily-expect/blob/master/test/checkValue.test.js)
* [checkAllKeys](https://github.com/KSH-code/easily-expect/blob/master/test/checkAllKeys.test.js)
* [checkAbove](https://github.com/KSH-code/easily-expect/blob/master/test/checkAbove.test.js)
* [checkEmpty](https://github.com/KSH-code/easily-expect/blob/master/test/checkEmpty.test.js)
