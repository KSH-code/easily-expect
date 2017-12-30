[![Build Status](https://travis-ci.org/KSH-code/easily-expect.svg?branch=master)](https://travis-ci.org/KSH-code/easily-expect)

# HOW TO USE ?
```
npm install --save easily-expect
```
```
const { checkType } = require('easily-expect')

describe (...)
    it (...)
        checkType('string' ...objects)
```
## Example
[index.test.js](test/index.test.js)