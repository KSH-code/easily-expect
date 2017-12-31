[![Build Status](https://travis-ci.org/KSH-code/easily-expect.svg?branch=master)](https://travis-ci.org/KSH-code/easily-expect)

# HOW TO USE ?
```
npm install --save easily-expect
```
```
const { checkType, checkMatch } = require('easily-expect')

describe (...)
    it (...)
        checkType('string', '123', '0')
    it (...)
        checkMatch(/\d/, '1', '123', '1234')
```
## Example
* [checkType](https://github.com/KSH-code/easily-expect/blob/master/test/checkType.test.js)
* [checkMatch](https://github.com/KSH-code/easily-expect/blob/master/test/checkMatch.test.js)