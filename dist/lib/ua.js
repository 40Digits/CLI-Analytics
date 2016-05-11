'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var google = require('universal-analytics');

var UA = function () {
  function UA(tid) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, UA);

    if (!Boolean(tid)) {
      throw new Error('<cli-analytics> UA missing required uid parameter');
    }

    var defaults = {
      https: true
    };

    var lastaction = new Date().getTime();

    var settings = Object.assign({}, defaults, options);

    if (Boolean(settings.cid)) {
      this.track = new google(tid, settings.cid, settings);
    } else {
      this.track = new google(tid, settings);
    }

    return this;
  }

  _createClass(UA, [{
    key: 'getTimeDiff',
    value: function getTimeDiff() {
      return new Date().getTime() - this.lastaction;
    }
  }, {
    key: 'updateLastActionTime',
    value: function updateLastActionTime() {
      this.lastaction = new Date().getTime();
    }
  }]);

  return UA;
}();

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;