'use strict'

const UA = require('./lib/ua.js')
const aguid = require('aguid')
const user = require('git-user-email')

module.exports = function(uid) {
  const guid = aguid(user());
  const ga = new UA(uid, guid);
  return ga;
}
