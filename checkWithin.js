'use strict'
const { expect } = require('chai')

/**
 *
 * @param {Number} start
 * @param {Number} finish
 * @param {Objects} objects
 */
module.exports = function checkWithin (start, finish, ...objects) {
  for (let i = 0; i < objects.length; i++) {
    expect(objects[i]).to.be.at.within(start, finish)
  }
}
