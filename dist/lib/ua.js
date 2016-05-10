'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var aguid = require('aguid');
var google = require('universal-analytics');

var UA = function UA(tid, hostname) {
  var cid = arguments.length <= 2 || arguments[2] === undefined ? aguid() : arguments[2];

  _classCallCheck(this, UA);

  this.debug = false;

  if (tid === 'debug') {
    this.debug = true;
  }

  if (!Boolean(tid)) {
    throw new Error('<cli-analytics> UA missing required uid parameter');
  }

  if (!Boolean(hostname)) {
    throw new Error('<cli-analytics> UA missing required hostname parameter');
  }

  this.track = new google(tid, cid);
};

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;