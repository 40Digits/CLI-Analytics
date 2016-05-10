'use strict'

const request = require('request')
const aguid = require('aguid')

function postRequestDataToGA(data, debug) {
  const url = Boolean(debug) ? 'https://www.google-analytics.com/debug/collect' : 'https://www.google-analytics.com/collect';
  return new Promise((resolve, reject) => {
    request.post({ url, form: data}, (err, res, body) => {
      if (err) {
        reject(err.message);
        return false;
      }

      resolve(res);
      return true;
    });
  });
}

class UA {
  constructor(tid, hostname, cid = aguid()) {
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
      tid,
      cid,
      dh: hostname
    };
  }

  pageview(path, title, meta = {}) {
    return new Promise((resolve, reject) => {
      const trackOptions = {
        t: 'pageview',
        dp: path,
        dt: title,
      };
      const trackRequest = Object.assign({}, this.settings, trackOptions, meta);
      postRequestDataToGA(trackRequest, this.debug).then((res)=> resolve(res)).catch(err => reject(err));
    });
  }

  event(category, action, label, meta = {}) {
    const trackOptions = {
      t: 'event',
      ec: category,
      ea: action,
      el: label,
    };
    const trackRequest = Object.assign({}, this.settings, trackOptions, meta);
    postRequestDataToGA(trackRequest, this.debug).then((res) => resolve(res)).catch(err => reject(err));
  }

  timing(category, variable, time, label, meta = {}) {
    const trackOptions = {
      t: 'timing',
      utc: category,
      utv: variable,
      utt: time,
      utl: label,
    };
    const trackRequest = Object.assign({}, this.settings, trackOptions, meta);
    postRequestDataToGA(trackRequest, this.debug).then((res)=> resolve(res)).catch(err => reject(err));
  }
}

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;
