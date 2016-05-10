'use strict'

const request = require('request');
const aguid = require('aguid');
const google = require('universal-analytics');

class UA {
  constructor(tid, cid = aguid(), options = {}) {
    if (!Boolean(tid)) {
      throw new Error('<cli-analytics> UA missing required uid parameter');
    }

    let defaults = {
      https: true,
    };

    const settings = Object.assign({}, defaults, options);
    this.track = new google(tid, cid, settings);
  }
}

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;
