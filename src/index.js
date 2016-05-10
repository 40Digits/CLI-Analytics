'use strict';

const UA = require('./lib/ua.js');
const aguid = require('aguid');
const user = require('git-user-email');

module.exports = function(uid, guid = aguid(user())) {
  return new UA(uid, guid, options);
};
