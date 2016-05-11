'use strict'

const request = require('request');
const google = require('universal-analytics');

class UA {
  constructor(tid, options = {}) {
    if (!Boolean(tid)) {
      throw new Error('<cli-analytics> UA missing required uid parameter');
    }

    let defaults = {
      https: true,
    };

    let timings = {};

    const settings = Object.assign({}, defaults, options);

    if (Boolean(settings.cid)) {
      this.track = new google(tid, settings.cid, settings);
    } else {
      this.track = new google(tid, settings);
    }

    return this;
  }

  getTimeDiff(variable) {
    return new Date().getTime() - this.timings[variable];
  }

  startTimer(variable, time = new Date().getTime()) {
    this.timings[variable] = time;
  }
}

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;
