'use strict';

var UA = require('./lib/ua.js');
var aguid = require('aguid');
var user = require('git-user-email');

module.exports = function (uid) {
  var guid = arguments.length <= 1 || arguments[1] === undefined ? aguid(user()) : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new UA(uid, guid, options);
};