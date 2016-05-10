'use strict';

const UA = require('./lib/ua.js');
const aguid = require('aguid');
const user = require('git-user-email');

module.exports = function(uid, options = {}) {
  return new UA(uid, options);
};
