'use strict'
const { expect } = require('chai')
const { deepEqual } = require('easily-js')
let cacheData = {}
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
    if (!Array.isArray(object) && typeof object === 'object' && object !== null) expect(deepEqual(object, data)).to.equal(true)
    else expect(object).to.equal(data)
  }
}

exports.checkObject = (...objects) => {
  exports.checkType('object', ...objects)
  for (let i = objects.length; --i >= 0;) {
    checkObject(objects[i], cacheData)
  }
}

function checkObject (object, comparedData) {
  for (let key in object) {
    expect(key in comparedData).to.equal(true)
    if (typeof object[key] === 'object' && !Array.isArray(object[key])) checkObject(object[key], comparedData[key])
    else if (checkArray(comparedData[key], object[key])) continue
    else expect(`${object[key]}`).to.match(comparedData[key])
  }
}

function checkArray (comparedData, ...objects) {
  for (let k = objects.length; --k >= 0;) {
    let object = objects[k]
    if (Array.isArray(object)) {
      let j = 0
      for (let i = 0, length = object.length; i < length; i++) {
        if (typeof object[i] === 'object' && !Array.isArray(object[i])) checkObject(object[i], comparedData[j])
        else if (checkArray(comparedData[j], object[i])) continue
        else expect(`${object[i]}`).to.match(comparedData[j])
        j = (j + 1) % comparedData.length
      }
    } else return false
  }
  return true
}

exports.checkArray = checkArray
exports.checkValue = (...objects) => {
  for (let k = 0; k < objects.length; k++) {
    const object = objects[k]
    expect(Boolean(object)).to.equal(true)
  }
}
exports.checkAllKeys = function checkAllKeys (keyNames, ...objects) {
  exports.checkType('object', ...objects)
  for (let i = 0; i < keyNames.length; i++) {
    for (let j = 0; j < objects.length; j++) {
      exports.checkEqual(true, Boolean(objects[j][keyNames[i]]))
    }
  }
}
exports.checkAbove = function checkAbove (n, ...objects) {
  for (let i = 0; i < objects.length; i++) {
    expect(objects[i]).to.be.above(n)
  }
}
exports.checkEmpty = require('./checkEmpty')
exports.checkNotEmpty = require('./checkNotEmpty')
exports.checkBelow = require('./checkBelow')
exports.checkMost = require('./checkMost')
exports.checkLeast = require('./checkLeast')
exports.init = data => {
  cacheData = data
}
