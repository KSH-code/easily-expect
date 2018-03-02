'use strict'
const { expect } = require('chai')

/**
 *
 * @param {Number} number
 * @param {Objects} objects
 */
module.exports = function checkLeast (number, ...objects) {
  for (let i = 0; i < objects.length; i++) {
    expect(objects[i]).to.be.at.least(number)
  }
}
