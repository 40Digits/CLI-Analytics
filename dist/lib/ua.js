'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var aguid = require('aguid');

function postRequestDataToGA(data, debug) {
  var url = Boolean(debug) ? 'https://www.google-analytics.com/debug/collect' : 'https://www.google-analytics.com/collect';
  return new Promise(function (resolve, reject) {
    request.post({ url: url, form: data }, function (err, res, body) {
      if (err) {
        reject(err.message);
        return false;
      }

      resolve(res);
      return true;
    });
  });
}

var UA = function () {
  function UA(tid, hostname) {
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

    this.settings = {
      v: 1,
      tid: tid,
      cid: cid,
      dh: hostname
    };
  }

  _createClass(UA, [{
    key: 'pageview',
    value: function pageview(path, title) {
      var _this = this;

      var meta = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      return new Promise(function (resolve, reject) {
        var trackOptions = {
          t: 'pageview',
          dp: path,
          dt: title
        };
        var trackRequest = Object.assign({}, _this.settings, trackOptions, meta);
        postRequestDataToGA(trackRequest, _this.debug).then(function (res) {
          return resolve(res);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: 'event',
    value: function event(category, action, label) {
      var meta = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      var trackOptions = {
        t: 'event',
        ec: category,
        ea: action,
        el: label
      };
      var trackRequest = Object.assign({}, this.settings, trackOptions, meta);
      postRequestDataToGA(trackRequest, this.debug).then(function (res) {
        return resolve(res);
      }).catch(function (err) {
        return reject(err);
      });
    }
  }, {
    key: 'timing',
    value: function timing(category, variable, time, label) {
      var meta = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

      var trackOptions = {
        t: 'timing',
        utc: category,
        utv: variable,
        utt: time,
        utl: label
      };
      var trackRequest = Object.assign({}, this.settings, trackOptions, meta);
      postRequestDataToGA(trackRequest, this.debug).then(function (res) {
        return resolve(res);
      }).catch(function (err) {
        return reject(err);
      });
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