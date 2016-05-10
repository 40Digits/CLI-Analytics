'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var aguid = require('aguid');
var google = require('universal-analytics');

var UA = function UA(tid) {
  var cid = arguments.length <= 1 || arguments[1] === undefined ? aguid() : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  _classCallCheck(this, UA);

  if (!Boolean(tid)) {
    throw new Error('<cli-analytics> UA missing required uid parameter');
  }

  var defaults = {
    https: true
  };

  var settings = Object.assign({}, defaults, options);
  this.track = new google(tid, cid, settings);
};

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;