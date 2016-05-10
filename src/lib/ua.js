'use strict'

const request = require('request');
const aguid = require('aguid');
const google = require('universal-analytics');

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

    this.track = new google(tid, cid, {https: true});
  }
}

/*
  NOTES:
    Parameter definitions to the Measurement Protocol:
    https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
 */

module.exports = UA;
