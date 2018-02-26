'use strict'
const { expect } = require('chai')

/**
 *
 * @param {Objects} objects 
 */
module.exports = function checkEmpty (...objects) {
  for (let i = 0; i < objects.length; i++) {
    expect(objects[i]).to.be.empty
  }
}
