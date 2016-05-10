'use strict';

var UA = require('./lib/ua.js');
var aguid = require('aguid');
var user = require('git-user-email');

module.exports = function (uid) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return new UA(uid, options);
};