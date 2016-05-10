'use strict';

var UA = require('./lib/ua.js');
var aguid = require('aguid');
var user = require('git-user-email');

module.exports = function (uid) {
  var guid = aguid(user());
  var ga = new UA(uid, guid);
  return ga;
};