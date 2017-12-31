'use strict'
const { expect } = require('chai')

exports.checkType = (dataType, ...objects) => {
  dataType = dataType.toLowerCase()
  for (let object of objects) {
    if (dataType === 'array') expect(object).to.be.an(dataType)
    else if (dataType === 'null') expect(object).to.be.a('null')
    else if (dataType === 'nan') expect(isNaN(object)).to.equal(true)
    else expect(typeof object).to.equal(dataType)
  }
}

exports.checkMatch = (expression, ...objects) => {
  exports.checkType('string', ...objects)
  for (let object of objects) {
    expect(object).to.match(expression)
  }
}

exports.checkEqual = (data, ...objects) => {
  for (let object of objects) {
    if (!Array.isArray(object) && typeof object === 'object') expect(JSON.stringify(object)).to.equal(JSON.stringify(data))
    else expect(object).to.equal(data)
  }
}
