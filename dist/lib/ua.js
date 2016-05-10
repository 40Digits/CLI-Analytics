'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var google = require('universal-analytics');

var UA = function UA(tid) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  _classCallCheck(this, UA);

  if (!Boolean(tid)) {
    throw new Error('<cli-analytics> UA missing required uid parameter');
  }

  var defaults = {
    https: true
  };

  var settings = Object.assign({}, defaults, options);

  if (Boolean(settings.cid)) {
    this.track = new google(tid, settings.cid, settings);
  } else {
    this.track = new google(tid, settings);
  }

  return this;
};

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;