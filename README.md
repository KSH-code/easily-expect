[![Build Status](https://travis-ci.org/KSH-code/easily-expect.svg?branch=master)](https://travis-ci.org/KSH-code/easily-expect)

# HOW TO USE ?
```
npm install --save easily-expect
```
```
const { checkType, checkMatch, checkEqual, checkObject, init } = require('easily-expect')

describe (...)
    init({
        test1: {
        test2: /^\d*$/
        },
        test3: /^[a-z]{1,10}$/
    })
    it (...)
        checkType('string', '123', '0')
    it (...)
        checkMatch(/\d/, '1', '123', '1234')
    it (...)
        checkEqual('abc', 'abc', 'aaa') // aaa is false
    it (...)
        checkObject({ test1: { test2: '123123123' } })
```
## Example
* [checkType](https://github.com/KSH-code/easily-expect/blob/master/test/checkType.test.js)
* [checkMatch](https://github.com/KSH-code/easily-expect/blob/master/test/checkMatch.test.js)
* [checkEqual](https://github.com/KSH-code/easily-expect/blob/master/test/checkEqual.test.js)
* [checkObject](https://github.com/KSH-code/easily-expect/blob/master/test/checkObject.test.js)