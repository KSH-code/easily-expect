'use strict'
const { expect } = require('chai')

/**
 *
 * @param {Objects} objects
 */
module.exports = function checkNotEmpty (...objects) {
  for (let i = 0; i < objects.length; i++) {
    console.log(objects[i])
    expect(objects[i]).to.not.be.empty
  }
}
