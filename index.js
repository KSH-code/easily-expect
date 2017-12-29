'use strict'
const { expect } = require('chai')

module.exports.checkType = (dataType, ...objects) => {
  dataType = dataType.toLowerCase()
  for (let i = objects.length; --i >= 0;) {
    for (let object of objects) {
      if (dataType === 'array') expect(object).to.be.an(dataType)
      else if (dataType === 'null') expect(object).to.be.a('null')
      else if (dataType === 'nan') expect(isNaN(object)).to.equal(true)
      else expect(typeof object).to.equal(dataType)
    }
  }
}