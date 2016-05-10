'use strict';

const UA = require('./lib/ua.js');
const aguid = require('aguid');
const user = require('git-user-email');

module.exports = function(uid, hostname) {
  const guid = aguid(user());
  const ga = new UA(uid, hostname, guid);
  return ga;
};
